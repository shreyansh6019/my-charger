"use client";

import React from "react";
import styles from "./ChargerDetails.module.css"
import RedStick from "@/public/red_stick.png";
import BlueStick from "@/public/blue_stick.png";
import SlateStick from "@/public/black_stick.png";
import Image from "next/image";

type Props = {
  title?: string;
};

export default function ChargerMCB({ title = "MCB" }: Props) {
  return (
    <section className="w-full rounded-lg bg-[#0d111d] pr-4 pt-4 pl-7 pb-7 shadow-sm">
      <div className="flex flex-col gap-3">
        <div className="flex items-center">
          <h4 className="text-sm font-semibold text-slate-100">{title}</h4>
          <span className={styles.green_circle}></span>
        </div>
            <div className="mt-2 grid grid-cols-2 gap-4">
                <div className="mt-2 grid grid-cols-2 gap-4 flex items-end">
                    <div className="text-xs text-slate-400">
                        <div className="mb-1">kWh</div>
                        <div className="text-sm font-medium">Hz</div>
                        <div className="mt-2 mb-1">PF</div>
                        <div className="text-sm font-medium">Earthing</div>
                    </div>

                    <div className="text-xs text-slate-400">
                        <div className="mb-1 text-slate-200">62 kWh</div>
                        <div className="text-sm font-medium text-slate-200">60 Hz</div>
                        <div className="mt-2 mb-1 text-slate-200">0.8 PF</div>
                        <div className="text-sm font-medium text-slate-200">Earthing</div>
                    </div>
                </div>
                {/* stylized vertical bars (decorative) */}
                <div className="mt-3 flex items-center gap-3">
                    <div className="flex flex-1 items-end justify-center gap-2">
                        <div className="flex flex-col">
                            <p className="text-xs text-slate-200">L1</p>
                            <Image src={RedStick} alt="red stick" width={15} className="h-[120px]"/>
                            <p className="text-xs text-slate-200">1000v<br/>60A</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-xs text-slate-200">L2</p>
                            <Image src={SlateStick} alt="blue stick" width={15} className="h-[120px]"/>
                            <p className="text-xs text-slate-200">1000v<br/>60A</p>
                        </div>
                        <div className="flexflex-col">
                            <p className="text-xs text-slate-200">L3</p>
                            <Image src={BlueStick} alt="slate stick" width={15} className="h-[120px]"/>
                            <p className="text-xs text-slate-200">1000v<br/>60A</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </section>
  );
}
