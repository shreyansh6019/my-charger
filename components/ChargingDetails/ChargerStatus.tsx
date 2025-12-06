"use client";

import React from "react";
import styles from "./ChargerDetails.module.css"

import DoorSlide from "@/public/door_sliding.png";
import YellowDoorSlide from "@/public/door_sliding_yellow.png";
import Image from "next/image";

type DoorStateProps = {
  title?: string;
  statusLeft?: string;
  statusRight?: string;
};

export default function ChargerStatus({
  title = "Door Status",
  statusLeft = "Closed",
  statusRight = "Open",
}: DoorStateProps){
  return (
    <section className="w-full rounded-lg bg-[#0d111d] px-7 py-4 shadow-sm">
      <div className="flex flex-col">
        <div className="flex flex-col items-start justify-start">
          <h3 className="flex justify-center items-center text-sm font-semibold text-slate-100">{title} <span className={styles.green_circle}></span></h3>
          <span className="text-xs text-slate-400">Status of Charger Doors</span>
        </div>

        <div className="mt-[2.575rem] grid grid-cols-5 items-center gap-4">
          <div className="text-xs text-slate-400">
            <div className="mb-2">FRONT DOOR</div>
            <div className="text-[1rem] font-medium text-slate-200 ml-[-2px]">
                <Image src={DoorSlide} alt="door sliding icon" width={20} height={20} className="inline-block mr-1"/>
                {statusLeft}</div>
          </div>
          <div className={`${styles.divider} w-[1px] h-full`}></div>
          <div className="text-xs text-slate-400">
            <div className="mb-2">LEFT DOOR</div>
            <div className="text-[1rem] font-medium text-slate-200 ml-[-2px]">
                <Image src={DoorSlide} alt="door sliding icon" width={20} height={20} className="inline-block mr-1"/>
                Closed</div>
          </div>
          <div className={`${styles.divider} w-[1px] h-full`}></div>
          <div className="text-xs text-slate-400">
            <div className="mb-2">RIGHT DOOR</div>
            <div className="text-[1rem] font-medium text-amber-400 ml-[-2px]">
                <Image src={YellowDoorSlide} alt="door sliding icon" width={20} height={20} className="inline-block mr-1"/>
                {statusRight}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
