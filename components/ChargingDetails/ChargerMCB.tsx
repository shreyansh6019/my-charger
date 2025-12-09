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
    <section className="w-full rounded-lg bg-[#0d111d] md:pr-4 md:pt-4 md:pl-4 md:pb-7 p-6 shadow-sm">
      <div className="flex flex-col gap-3">
        <div className="flex items-center">
          <h4 className="text-sm font-semibold text-slate-100">{title}</h4>
          <span className={styles.green_circle}></span>
        </div>
            <div className="mt-2 grid grid-cols-2 gap-4">
                <div className="mt-2 grid grid-cols-2 gap-4 flex items-end">
                    <div className="md:text-xs text-sm text-slate-400">
                        <div className="mb-1">kWh</div>
                        <div className="font-medium">Hz</div>
                        <div className="mt-2 mb-1">PF</div>
                        <div className="font-medium">Earthing</div>
                    </div>

                    <div className="text-xs text-slate-400">
                        <div className="lg:text-sm md:text-[0.675rem] text-sm mb-1 text-slate-200">62 kWh</div>
                        <div className="lg:text-sm md:text-[0.675rem] text-sm font-medium text-slate-200">60 Hz</div>
                        <div className="lg:text-sm md:text-[0.675rem] text-sm mt-2 mb-1 text-slate-200">0.8 PF</div>
                        <div className="lg:text-sm md:text-[0.675rem] text-sm font-medium text-slate-200">Earthing</div>
                    </div>
                </div>
                {/* stylized vertical bars (decorative) */}
                <div className="mt-3 flex items-center gap-3">
                    <div className="flex flex-1 items-end justify-between gap-2">
                        <div className="flex flex-col">
                            <p className="lg:text-xs md:text-[0.675rem] text-xs text-slate-200">L1</p>
                            <Image src={RedStick} alt="red stick" width={15} className="lg:h-[120px] h-[90px] lg:w-[15px] w-[10px]"/>
                            <p className="lg:text-xs md:text-[0.675rem] text-xs text-slate-200">1000v<br/>60A</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="lg:text-xs md:text-[0.675rem] text-xs text-slate-200">L2</p>
                            <Image src={SlateStick} alt="blue stick" width={15} className="lg:h-[120px] h-[90px] lg:w-[15px] w-[10px]"/>
                            <p className="lg:text-xs md:text-[0.675rem] text-xs text-slate-200">1000v<br/>60A</p>
                        </div>
                        <div className="flexflex-col">
                            <p className="lg:text-xs md:-[0.675rem] text-xs text-slate-200">L3</p>
                            <Image src={BlueStick} alt="slate stick" width={15} className="lg:h-[120px] h-[90px] lg:w-[15px] w-[10px]"/>
                            <p className="lg:text-xs md:text-[0.675rem] text-xs text-slate-200">1000v<br/>60A</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </section>
  );
}
