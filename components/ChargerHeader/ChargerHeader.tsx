"use client";

import React from "react";
import Link from "next/link";
import styles from "./ChargerHeader.module.css";

import Add from "../../public/add_outline.png";
import KeyBack from "../../public/keyboard_backspace.png";
import ArrowDown from "../../public/arrow_downward_alt.png";
import EVStation from "../../public/ev_station.png";
import Image from "next/image";

type ChargerHeaderProps = {
  title?: string;
  subtitle?: string;
  onAdd?: () => void;
  onDownload?: () => void;
};

export default function ChargerHeader({
  title = "ZYNIND0001",
  subtitle = "80 kW - Dual Gun",
  onAdd,
  onDownload,
}: ChargerHeaderProps) {
  return (
    <div className={`w-full ${styles.headerGlass}`}>
      <div className="flex justify-between gap-4 px-4 py-3">
        <div className="flex min-w-0 items-center gap-4 px-5">
            <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-transparent py-2 text-slate-200 hover:bg-slate-800"
                aria-label="Back"
                title="Back"
            >
                <Image
                    src={KeyBack}
                    alt="logo"
                    width={24}
                    height={24}
                    className="opacity-80 group-hover:opacity-100 transition-all"
                    priority={false}
                />
            </Link>
            <Image
                src={EVStation}
                alt="logo"
                width={24}
                height={24}
                className="opacity-80 group-hover:opacity-100 transition-all"
                priority={false}
            />
            <div className="min-w-0">
                <div className={`flex items-center gap-3 text-sm font-semibold text-slate-100 ${styles.truncateTitle}`}>
                    <span className="text-base font-semibold leading-tight">{title}</span>
                </div>
                <div className={`mt-0.5 text-xs text-slate-400 ${styles.subTitle}`}>{subtitle}</div>
            </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onAdd}
            className="flex items-center gap-2 rounded-md bg-slate-800 px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-700"
            aria-label="Add Charger"
            title="Add Charger"
            type="button"
          >
            <Image
                src={Add}
                alt="logo"
                width={24}
                height={24}
                className="opacity-80 group-hover:opacity-100 transition-all"
                priority={false}
            />
            <span className="hidden sm:inline">Add Charger</span>
          </button>
          <button
            onClick={onDownload}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-slate-800 text-slate-200 hover:bg-slate-700"
            aria-label="Download"
            title="Download"
            type="button"
          >
            <Image
                src={ArrowDown}
                alt="logo"
                width={24}
                height={24}
                className="opacity-80 group-hover:opacity-100 transition-all"
                priority={false}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
