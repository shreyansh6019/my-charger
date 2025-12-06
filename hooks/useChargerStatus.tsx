"use client";

import { useCallback, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchStatus } from "@/store/slices/chargerSlice";

type Options = {
  auto?: boolean;
  pollIntervalMs?: number | null;
};

export default function useChargerStatus(chargerId?: string, options: Options = {}) {
    console.log("Status hook started...");
    
  const { auto = true, pollIntervalMs = null } = options;
  const dispatch = useAppDispatch();

  const status = useAppSelector((state) => state.charger.status);
  const loading = useAppSelector((state) => state.charger.loading.status);
  const error = useAppSelector((state) => state.charger.error);

  const pollRef = useRef<number | null>(null);

  const refetch = useCallback(() => {
    if (!chargerId) return Promise.resolve(undefined);
    return dispatch(fetchStatus({ id: chargerId })).unwrap();
  }, [chargerId, dispatch]);

  useEffect(() => {
    if (!chargerId || !auto) return;
    refetch().catch((err) => {
      console.log("Failed to fetch status:", err);
    });
    if (pollIntervalMs && pollIntervalMs > 0) {
      pollRef.current = window.setInterval(() => {
        refetch().catch((err) => console.log("Failed to poll status:", err));
      }, pollIntervalMs);
    }

    return () => {
      if (pollRef.current) {
        window.clearInterval(pollRef.current);
      }
    };
  }, [chargerId, auto, pollIntervalMs, refetch]);

  return {
    data: status,
    loading,
    error,
    refetch,
  };
}