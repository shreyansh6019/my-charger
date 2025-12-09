"use client";

import React from "react";
import Image from "next/image";
import GunIcon from "@/public/GunPageIcon.png";

type Props = {
  title?: string;
};

export default function ChargerGunStatus({ title = "Gun Status" }: Props){
  return (
    <section className="w-full rounded-lg bg-[#151727] lg:p-8 p-4 shadow-sm">
      <div className="flex flex-col md:gap-[3.25rem] gap-[2.25rem]">
        <div className="flex flex-col items-start justify-start">
          <h4 className="text-sm font-semibold text-slate-100">{title}</h4>
          <span className="text-xs text-slate-400">Gun Armed/Charging Status</span>
        </div>

        <div className="mt-2 flex flex-col gap-[2.5rem]">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Image src={GunIcon} alt="gun icon" width={32} height={32} className="inline-block w-[2.75rem] h-[3rem]"/>
              <div className="grid gap-[0.375rem]">
                <div className="text-xs font-medium">GUN 1</div>
                <div className="text-[1rem] text-slate-200">ARMED</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Image src={GunIcon} alt="gun icon" width={32} height={32} className="inline-block w-[2.75rem] h-[3rem]"/>
              <div className="grid gap-[0.375rem]">
                <div className="text-xs font-medium">GUN 2</div>
                <div className="text-[1rem] text-emerald-400">Charging</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}