"use client";

import Link from "next/link";
import React from "react";
import { SIDEBAR_ITEMS } from "./Sidebar.items";
import styles from "./Sidebar.module.css";
import Image from "next/image";
import AppLogo from "../../public/app_logo.png";
import UserLogo from "../../public/account.png";

export default function Sidebar() {
  return (
    <>
      <aside
        className={`hidden md:fixed md:inset-y-0 md:left-0 md:z-40 md:flex md:w-20 md:flex-col md:items-center md:gap-6 md:overflow-y-auto md:bg-slate-900 md:px-2 md:py-4 ${styles.sidebarScroll}`}
        aria-label="Sidebar"
        style={{backgroundColor: "#0D1829"}}
      >
        <div className="flex w-10 h-10 items-center justify-center">
          <div className="h-7 w-7 rounded-lg flex items-center justify-center text-sm font-semibold text-white">
            <Image
                src={AppLogo}
                alt="Zaptec Logo"
                width={28}
                height={28}
                className="opacity-80 group-hover:opacity-100 transition-all"
                priority={false}
            />
          </div>
        </div>

        <div className="my-2 h-px w-10 bg-slate-700" />

        <nav className="flex flex-1 flex-col items-center gap-3">
          {SIDEBAR_ITEMS.map((item) => (
            <Link
                key={item?.id}
                href={item?.href}
                className="group relative flex h-10 w-10 items-center justify-center rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400"
                aria-label={item?.label}
                title={item?.label}
                >
                    {item?.source && (
                        <Image
                            src={item?.source}
                            alt={item?.label}
                            width={item?.id === "dash" ? 16 : 18}
                            height={item?.id === "dash" ? 16 : 18}
                            className="opacity-80 group-hover:opacity-100 transition-all"
                            priority={false}
                        />
                    )}
            </Link>
            ))}

        </nav>

        <div className="mt-auto flex w-full items-center justify-center">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
            aria-label="User"
            title="User"
          >
            <Image
                src={UserLogo}
                alt="User Logo"
                width={40}
                height={40}
                className="opacity-80 group-hover:opacity-100 transition-all"
                priority={false}
            />
          </button>
        </div>
      </aside>

      <nav
        className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around gap-2 bg-slate-900 px-3 py-2 shadow-inner md:hidden"
        aria-label="Mobile navigation"
      >
        {SIDEBAR_ITEMS.slice(0, 4).map((item) => (
          <Link
            key={`mobile-${item.id}`}
            href={item.href}
            className="flex flex-col items-center justify-center gap-1 rounded px-2 py-1 text-xs text-slate-200"
            aria-label={item.label}
            title={item.label}
          >
            <span className="block text-sm">{item.iconPlaceholder}</span>
            <span className="hidden text-[10px] sm:block">{item.label}</span>
          </Link>
        ))}

        <Link
          href="/profile"
          className="flex flex-col items-center justify-center gap-1 rounded px-2 py-1 text-xs text-slate-200"
          aria-label="Profile"
          title="Profile"
        >
          <span className="block text-sm">U</span>
          <span className="hidden text-[10px] sm:block">You</span>
        </Link>
      </nav>
    </>
  );
}
