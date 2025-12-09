"use client";

import { useEffect, useRef } from "react";
import { useAppDispatch } from "@/store/hooks";
import { addNotification } from "@/store/slices/chargerSlice";

const SAMPLE_MESSAGES = [
  { type: "warning", message: "Grid instability detected" },
  { type: "info", message: "Charge session completed" },
  { type: "warning", message: "Overcurrent detected on Gun 1" },
  { type: "info", message: "Gun 2 session started" },
  { type: "warning", message: "Internal temperature rising" },
  { type: "success", message: "Charger is in optimal condition" },
  { type: "critical", message: "Charger is heated" },
  { type: "success", message: "Temperature is in optimal condition" },
  { type: "critical", message: "Temperature is increasing exponentially" },
  { type: "success", message: "State of charger is perfect!!!" },
  { type: "critical", message: "Short-circuit happend inside casing" },
];

function getRandomTimeString() {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${day}/${month}/${year} | ${hours}:${minutes}:${seconds}`;
}


export default function useNotificationSimulator(enabled: boolean, intervalMs = 8000) {
  const dispatch = useAppDispatch();
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    timerRef.current = window.setInterval(() => {
      const sample = SAMPLE_MESSAGES[Math.floor(Math.random() * SAMPLE_MESSAGES.length)];

      const newNotification = {
        type: sample.type as "warning" | "info",
        message: sample.message,
        time: getRandomTimeString(),
      };

      dispatch(addNotification(newNotification));
    }, intervalMs);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [enabled, intervalMs, dispatch]);
}