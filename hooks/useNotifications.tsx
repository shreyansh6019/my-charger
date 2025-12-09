"use client";

import { useCallback, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchNotifications } from "@/store/slices/chargerSlice";

type Options = {
  auto?: boolean;
  pollIntervalMs?: number | null;
};

export default function useNotifications(chargerId?: string, options: Options = {}) {
    console.log("Notification hook started...");
    
  const { auto = true, pollIntervalMs = null } = options;
  const dispatch = useAppDispatch();

  const notifications = useAppSelector((state) => state.charger.notifications);
  const loading = useAppSelector((state) => state.charger.loading.notifications);
  const error = useAppSelector((state) => state.charger.error);

  const pollRef = useRef<number | null>(null);

  const refetch = useCallback(() => {
    if (!chargerId) return Promise.resolve(undefined);
    return dispatch(fetchNotifications({ id: chargerId })).unwrap();
  }, [chargerId, dispatch]);

  useEffect(() => {
    if (!chargerId || !auto) return;
    refetch().catch((err) => console.log("Failed to fetch notifications:", err));
    if (pollIntervalMs && pollIntervalMs > 0) {
      pollRef.current = window.setInterval(() => {
        refetch().catch((err) => console.log("Failed to poll notifications:", err));
      }, pollIntervalMs);
    }

    return () => {
      if (pollRef.current) {
        window.clearInterval(pollRef.current);
      }
    };
  }, [chargerId, auto, pollIntervalMs, refetch]);

  return {
    data: notifications,
    loading,
    error,
    refetch,
  };
}