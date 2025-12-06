"use client";

import React from "react";
import styles from "./ChargerTabs.module.css";
import Image, { StaticImageData } from "next/image";

import InfoIcon from "@/public/info_tab.png";
import NotificationIcon from "@/public/notification_tab.png";
import FaultIcon from "@/public/error_tab.png";
import SettingsIcon from "@/public/settings_alert_tab.png";
import ConfigIcon from "@/public/config_tab.png";
import EVStationIcon from "@/public/ev_station_tab.png";

type TabItem = {
  id: string;
  label: string;
  icon?: string; // placeholder "I1"
  source?: StaticImageData;
};

type ChargerTabsProps = {
  active?: string; // id of active tab
  onChange?: (id: string) => void;
};

const TABS: TabItem[] = [
  { id: "info", label: "Info", icon: "I1", source: InfoIcon },
  { id: "digital-twin", label: "Digital Twin", icon: "I1", source: EVStationIcon },
  { id: "fault", label: "Fault", icon: "I1", source: NotificationIcon },
  { id: "alarm", label: "Alarm", icon: "I1", source: FaultIcon },
  { id: "config", label: "Configuration", icon: "I1", source: ConfigIcon },
  { id: "maintenance", label: "Maintenance", icon: "I1", source: SettingsIcon },
];

export default function ChargerTabs({
  active = "digital-twin",
  onChange,
}: ChargerTabsProps) {
  return (
    <nav
      aria-label="Charger navigation tabs"
      className="w-full backdrop-blur-sm mt-2"
    >
      <div className="mx-auto mb-3 border-solid border-b-[2px] border-slate-400 flex max-w-7xl items-center justify-between px-4">
        <div className="flex w-full items-center justify-between gap-4 pt-3">
          {TABS.map((tab) => {
            const isActive = tab.id === active;

            return (
              <button
                key={tab.id}
                type="button"
                className="group flex flex-col items-center justify-center"
                onClick={() => onChange?.(tab.id)}
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={tab.source!}
                    alt={`${tab.label} icon`} 
                    width={24}
                    height={24}
                    className="inline-block h-4 w-4"
                  />
                  <span
                    className={`text-sm font-medium ${
                      isActive ? "text-[#87c445]" : "text-slate-300 group-hover:text-slate-200"
                    }`}
                  >
                    {tab.label}
                  </span>
                </div>
                <div
                  className={`mt-2 h-[2px] rounded-full bg-[#87c445] ${styles.underline} ${
                    isActive ? "w-25 opacity-100" : "w-0 opacity-0 group-hover:opacity-40"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}