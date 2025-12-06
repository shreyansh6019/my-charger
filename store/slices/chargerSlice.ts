import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Notification = {
  type: "warning" | "info" | "critical" | "success";
  message: string;
  time: string;
  id?: string;
  href?: string;
  read?: boolean;
};

export type ChargerStatus = {
  status?: "online" | "offline" | string;
  temperature?: number;
  weather?: string;
  location?: string;
  health?: string;
  power?: Record<string, number>;
  connectivity?: {
    wifi?: boolean;
    lan?: boolean;
    sim?: boolean;
    [key: string]: boolean | undefined;
  };
};

export type DiagnosticResponse = {
  diagnosticsStarted: boolean;
  timestamp: string;
};

type ChargerState = {
  notifications: Notification[];
  status?: ChargerStatus | null;
  diagnostic?: DiagnosticResponse | null;
  loading: {
    details: boolean;
    notifications: boolean;
    status: boolean;
    diagnostic: boolean;
  };
  error?: string | null;
};

type ErrorObject = {
  message: string;
  code?: number;
  name?: string;
};

const initialState: ChargerState = {
  notifications: [],
  status: null,
  diagnostic: null,
  loading: { details: false, notifications: false, status: false, diagnostic: false },
  error: null,
};

export const fetchNotifications = createAsyncThunk<
  Notification[],
  { id: string },
  { rejectValue: string }
>("charger/fetchNotifications", async ({ id }, { rejectWithValue }) => {
  try {
    const res = await fetch(`/api/charger/${id}/notifications`);
    if (!res.ok) {
      const text = await res.text();
      return rejectWithValue(text || "Failed to fetch notifications");
    }
    const data = (await res.json()) as Notification[];
    return data;
  } catch (err: unknown) {
    return rejectWithValue((err as ErrorObject)?.message ?? "Network error");
  }
});

export const fetchStatus = createAsyncThunk<
  ChargerStatus,
  { id: string },
  { rejectValue: string }
>("charger/fetchStatus", async ({ id }, { rejectWithValue }) => {
  try {
    const res = await fetch(`/api/charger/${id}/status`);
    if (!res.ok) {
      const text = await res.text();
      return rejectWithValue(text || "Failed to fetch status");
    }
    const data = (await res.json()) as ChargerStatus;
    return data;
  } catch (err: unknown) {
    return rejectWithValue((err as ErrorObject)?.message ?? "Network error");
  }
});

export const runDiagnostics = createAsyncThunk<
  DiagnosticResponse,
  { id: string },
  { rejectValue: string }
>("charger/runDiagnostics", async ({ id }, { rejectWithValue }) => {
  try {
    const res = await fetch(`/api/charger/${id}/diagnose`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      const text = await res.text();
      return rejectWithValue(text || `Failed to run diagnostics for ${id}`);
    }

    const data = (await res.json()) as DiagnosticResponse;
    return data;
  } catch (err: unknown) {
    return rejectWithValue((err as ErrorObject)?.message ?? "Network error");
  }
});

const chargerSlice = createSlice({
  name: "charger",
  initialState,
  reducers: {
    addNotification(state, action: PayloadAction<Notification>) {
      if (action.payload.id) {
        const exists = state.notifications.find((n) => n.id === action.payload.id);
        if (!exists) {
          state.notifications.unshift(action.payload);
        }
      } else {
        state.notifications.unshift(action.payload);
      }
    },
    clearNotifications(state) {
      state.notifications = [];
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.pending, (state) => {
      state.loading.notifications = true;
      state.error = null;
    });
    builder.addCase(fetchNotifications.fulfilled, (state, action: PayloadAction<Notification[]>) => {
      state.loading.notifications = false;
      state.notifications = action.payload ?? [];
    });
    builder.addCase(fetchNotifications.rejected, (state, action) => {
      state.loading.notifications = false;
      state.error = action.payload ?? action.error.message ?? "Failed to fetch notifications";
    });

    builder.addCase(fetchStatus.pending, (state) => {
      state.loading.status = true;
      state.error = null;
    });
    builder.addCase(fetchStatus.fulfilled, (state, action: PayloadAction<ChargerStatus>) => {
      state.loading.status = false;
      state.status = action.payload;
    });
    builder.addCase(fetchStatus.rejected, (state, action) => {
      state.loading.status = false;
      state.error = action.payload ?? action.error.message ?? "Failed to fetch status";
    });
    
    builder.addCase(runDiagnostics.pending, (state) => {
      state.loading.diagnostic = true;
      state.error = null;
    });
    builder.addCase(runDiagnostics.fulfilled, (state, action: PayloadAction<DiagnosticResponse>) => {
      state.loading.diagnostic = false;
      state.diagnostic = action.payload;
    });
    builder.addCase(runDiagnostics.rejected, (state, action) => {
      state.loading.diagnostic = false;
      state.error = action.payload ?? action.error.message ?? "Failed to run diagnostics";
    });
  },
});

export const { addNotification, clearNotifications, clearError } = chargerSlice.actions;

export default chargerSlice.reducer;