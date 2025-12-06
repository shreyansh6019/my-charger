"use client";

import Link from "next/link";
import styles from "./Notifications.module.css";
import { NOTIFICATIONS, NotificationItem } from "./Notifications.items";
import Image from "next/image";
import ViewObject from "@/public/view_object_track.png"
import ArrowForward from "@/public/arrow_forward.png"
import Notification from "@/public/notification_red.png"
import Warning from "@/public/warning_orange.png"
import useNotifications from "@/hooks/useNotifications";
import useNotificationSimulator from "@/hooks/useNotifySimulator";

type NotificationsProps = {
  items?: NotificationItem[];
  className?: string;
  maxHeight?: string;
  chargerId?: string;
};

function badgeColor(level?: NotificationItem["level"]) {
  switch (level) {
    case "critical":
      return "bg-(--notif-critical-bg) text-white";
    case "warning":
      return "bg-(--notif-warning-bg) text-slate-900";
    case "success":
      return "bg-(--notif-success-bg) text-slate-900";
    default:
      return "bg-slate-700 text-slate-200";
  }
}

export default function Notifications({
  items = NOTIFICATIONS,
  className = "",
  chargerId= "",
}: NotificationsProps) {
  useNotificationSimulator(true, 7000);
  const { data } = useNotifications(chargerId, {
    auto: true,
    pollIntervalMs: 30000,
  });
  
  return (
    <aside
      className={`w-full rounded-lg bg-[#0d111d] p-4 shadow-sm ${className}`}
      aria-label="Live Notifications"
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={ViewObject} alt="notifications icon" width={24} height={24} className="inline-block w-6 h-6"/>
          <h3 className="text-sm font-semibold text-slate-100">Live Notifications</h3>
        </div>

        <Link href="/notifications" className={`text-sm text-[#4c8af0] ${styles.moreLink}`}>
          More &nbsp;›
        </Link>
      </div>

      <div className={`flex flex-col gap-3 overflow-auto pr-2 ${styles.containerScroll}`} style={{ maxHeight: "calc(100vh - 0px)" }}>
        {data.map((n, index) => (
          <Link
            key={index}
            href={"#"}
            className="group flex w-full items-center justify-between gap-3 rounded-lg bg-[#101625] px-4 py-3 text-left transition hover:translate-y-[-1px] hover:brightness-110"
            aria-label={`Notification ${n.message}`}
            title={n.message}
          >
            <div className="flex flex-1 flex-col overflow-hidden">
              <div className="flex items-center justify-between">
                <time className="text-xs text-slate-400">{n.time}</time>
                <span className={`inline-flex items-center gap-1 rounded-[2px] px-1 py-0 text-[9px] font-semibold ${badgeColor(n.type)}`}>
                    {n?.type === "critical" && (<Image src={Warning} alt="notifications icon" width={24} height={24} className="inline-block w-4 h-4"/>)}
                    {n?.type === "warning" && (<Image src={Notification} alt="notifications icon" width={24} height={24} className="inline-block w-4 h-4"/>)}
                    {n?.type === "info" && (<Image src={Warning} alt="notifications icon" width={24} height={24} className="inline-block w-4 h-4"/>)}
                    {n?.type === "success" && (<Image src={ArrowForward} alt="notifications icon" width={24} height={24} className="inline-block w-4 h-4"/>)}
                    707609
                </span>
              </div>

              <div className="mt-2 flex items-center justify-between gap-3">
                <p className="truncate text-sm font-medium text-slate-100">{n.message}</p>

                <div className="ml-3 flex items-center gap-3">
                  <Image src={ArrowForward} alt="notifications icon" width={24} height={24} className="inline-block w-6 h-6 py-1 px-0"/>
                </div>
              </div>
            </div>
          </Link>
        ))}
        {(items.length === 0 || data.length === 0) && (
          <div className="rounded-lg border border-slate-800 bg-slate-800/50 px-4 py-6 text-center text-sm text-slate-400">
            No notifications
          </div>
        )}
      </div>
    </aside>
  );
}
