"use client";

import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { runDiagnostics } from "@/store/slices/chargerSlice";

type Options = {
  auto?: boolean;
};

export default function useChargerDetails(chargerId?: string, options: Options = {}) {
  const { auto = true } = options;
  const dispatch = useAppDispatch();

  const details = useAppSelector((state) => state.charger.diagnostic);
  const loading = useAppSelector((state) => state.charger.loading.details);
  const error = useAppSelector((state) => state.charger.error);

  const refetch = useCallback(() => {
    if (!chargerId) return Promise.resolve(undefined);
    return dispatch(runDiagnostics({ id: chargerId })).unwrap();
  }, [chargerId, dispatch]);

  useEffect(() => {
    if (!chargerId || !auto) return;
    refetch().catch((err) => {
      console.log("Failed to fetch charger details:", err);
    });
  }, [chargerId, auto, refetch]);

  return {
    data: details,
    loading,
    error,
    refetch,
  };
}