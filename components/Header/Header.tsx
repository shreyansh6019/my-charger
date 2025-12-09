"use client";

import styles from "./Header.module.css";
import Link from "next/link";
import Home from "../../public/home.png";
import Search from "../../public/search.png";
import Notifications from "../../public/mobile_notifications.png";
import FilterList from "../../public/filter_list.png";
import RightArrow from "../../public/chevron_right.png";
import Help from "../../public/help.png";
import AddCharger from "../../public/add.png";
import ExpandMore from "../../public/expand_more.png";
import Image from "next/image";
import React from "react";
import { MobileNotifyContext } from "@/context/MobileNotifyContext";


export default function Header() {
    const { showMobileNotifyScreen, setShowMobileNotifyScreen } =
        React.useContext(MobileNotifyContext);
    console.log(showMobileNotifyScreen, "Checking notify...");
    
    return (
        <header
            className={`fixed relative top-0 z-40 lg:pl-9 md:pl-6 pl-4 xl:pt-14 lg:pt-9 md:pt-6 pt-4 lg:pr-9 md:pr-6 pr-4 z-40 w-full ${styles.headerGlass}`}
            aria-label="Top navigation"
        >
            <div className="flex items-center justify-between xl:gap-[34%] lg:gap-[20%] md:gap-[12%]">
                <div className="flex min-w-0 items-center lg:gap-3 gap-2">
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                        <Link href="/" className="text-slate-300 hover:text-white">
                            <Image
                                src={Home}
                                alt="Zaptec Logo"
                                width={20}
                                height={20}
                                className="opacity-80 group-hover:opacity-100 transition-all"
                                priority={false}
                            />
                        </Link>
                        <Image
                            src={RightArrow}
                            alt="logo"
                            width={20}
                            height={20}
                            className="opacity-80 group-hover:opacity-100 transition-all"
                            priority={false}
                        />
                        <span className="truncate text-slate-200 lg:text-sm md:text-[0.75rem] text-sm">Charger Management</span>
                    </div>
                </div>
                <div className="flex min-w-0 items-center lg:gap-3 gap-2">
                    <div className="lg:mx-4 md:flex hidden md:flex-1 md:items-center md:justify-center">
                        <div className="flex w-full max-w-2xl items-center gap-3">
                            <div className="hidden sm:flex items-center gap-2">
                                <button
                                    className="flex items-center gap-2 rounded-md border border-slate-700 bg-slate-800 xl:px-5 xl:py-2 md:px-2 md:py-1 xl:text-sm md:text-[0.675rem] text-slate-200 hover:bg-slate-700 gap-4"
                                    aria-label="Vendor"
                                    title="Vendor"
                                >
                                    <span>Vendor</span>
                                    <Image
                                        src={ExpandMore}
                                        alt="logo"
                                        width={24}
                                        height={24}
                                        className="opacity-80 group-hover:opacity-100 transition-all"
                                        priority={false}
                                    />
                                </button>
                            </div>
                            <div className="flex flex-1 items-center gap-2">
                                <div className="flex w-full items-center gap-2 rounded-md border border-slate-700 bg-slate-900 xl:px-3 xl:py-1 md:py-0 md:px-2">
                                    <Image
                                        src={Search}
                                        alt="logo"
                                        width={20}
                                        height={20}
                                        className="opacity-80 group-hover:opacity-100 transition-all"
                                        priority={false}
                                    />
                                    <input
                                        type="search"
                                        placeholder="Charger/Hub"
                                        className="w-full bg-transparent xl:text-sm md:text-[0.675rem] text-slate-200 placeholder:text-slate-500 focus:outline-none"
                                        aria-label="Search chargers"
                                    />
                                    <select
                                        className="hidden sm:inline-flex h-8 rounded-md px-2 xl:text-sm md:text-[0.675rem] text-slate-300"
                                        aria-label="All filter"
                                    >
                                        <option>All</option>
                                    </select>
                                </div>
                                <button
                                    className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-800 xl:px-3 xl:py-2 md:py-2 md:px-2 xl:text-sm md:text-[0.675rem] text-slate-200 hover:bg-slate-700"
                                    aria-label="Filter"
                                    title="Filter"
                                >
                                    <Image
                                        src={FilterList}
                                        alt="logo"
                                        width={24}
                                        height={24}
                                        className="opacity-80 group-hover:opacity-100 transition-all"
                                        priority={false}
                                    />
                                    <span>Filter</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center lg:gap-3 gap-2">
                        <button
                            className="inline-flex lg:hidden items-center justify-center rounded-md text-slate-200 hover:bg-slate-800"
                            aria-label="Notifications"
                            title="Notifications"
                            onClick={() => {
                                setShowMobileNotifyScreen(!showMobileNotifyScreen);
                            }}
                        >
                            <Image
                                src={Notifications}
                                alt="logo"
                                width={40}
                                height={40}
                                className="opacity-80 group-hover:opacity-100 transition-all xl:h-10 md:h-6 h-6 xl:w-10 md:w-6 w-6"
                                priority={false}
                            />
                        </button>
                        <button
                            className="hidden lg:inline-flex items-center justify-center rounded-md text-slate-200 hover:bg-slate-800"
                            aria-label="Notifications"
                            title="Notifications"
                        >
                            <Image
                                src={Notifications}
                                alt="logo"
                                width={40}
                                height={40}
                                className="opacity-80 group-hover:opacity-100 transition-all xl:h-10 md:h-6 xl:w-10 md:w-6"
                                priority={false}
                            />
                        </button>
                        <button
                            className="hidden sm:inline-flex items-center justify-center rounded-md text-slate-200 hover:bg-slate-800"
                            aria-label="Help"
                            title="Help"
                        >
                            <Image
                                src={Help}
                                alt="logo"
                                width={40}
                                height={40}
                                className="opacity-80 group-hover:opacity-100 transition-all xl:h-10 md:h-6 h-6 xl:w-10 md:w-6 w-6"
                                priority={false}
                            />
                        </button>
                        <button
                            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 text-sm font-semibold text-slate-900 shadow-sm hover:brightness-95"
                            aria-label="Add"
                            title="Add"
                        >
                            <Image
                                src={AddCharger}
                                alt="logo"
                                width={40}
                                height={40}
                                className="opacity-80 group-hover:opacity-100 transition-all xl:h-9 md:h-5 h-5 xl:w-9 md:w-5 w-5"
                                priority={false}
                            />
                        </button>
                        {/* <div className="relative">
        <button
        className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-2 py-1 text-sm text-slate-200"
        aria-label="User menu"
        title="User menu"
        >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-sm font-medium text-slate-200">
            P1
        </span>
        <span className="hidden sm:inline">shivam</span>
        </button>
    </div> */}
                    </div>
                </div>
            </div>
        </header>
    );
}