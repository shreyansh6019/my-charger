"use client";

import styles from "./ChargerDetails.module.css";
import Image from "next/image";

import Humidity from "@/public/humidity_low.png";
import ChargerGun from "@/public/charger_gun.png";
import TemperatureIcon from "@/public/charger_temp.png";    
import Thermostat from "@/public/device_thermostat.png";

type Props = {
  title?: string;
};

export default function Temperature({ title = "Temperature" }: Props) {
  return (
    <section className="w-full rounded-lg bg-[#151727] lg:pt-[2rem] pt-[1rem] lg:pl-[2rem] pl-[1rem] lg:pr-[2rem] pr-[1rem] md:pb-[4rem] pb-[1rem] shadow-sm">
      <div className="flex flex-col gap-[3rem]">
        <div className="flex flex-col items-start justify-start">
          <h4 className="text-sm font-semibold text-slate-100">{title}</h4>
          <span className="text-xs text-slate-400">Temperature and Humidity in and around Charger</span>
        </div>

              <div className="mt-3 inline-flex gap-3 text-xs text-slate-400">
                  <div className="grid gap-[2rem]">
                      <div className="flex">
                          <Image src={Thermostat} alt="temperature icon" width={20} height={20} className="inline-block mr-1 mb-1 w-6 h-6" />
                          <div className="flex flex-col">
                            <div className="lg:text-xs text-[0.675rem]">EXTERNAL</div>
                            <div className="lg:text-sm text-xs font-medium text-slate-200">37° c</div>
                          </div>
                          
                      </div>

                      <div className="flex">
                          <Image src={Humidity} alt="thermostat icon" width={15} height={15} className="inline-block mr-1 mb-1 w-6 h-6" />
                          <div className="flex flex-col">
                            <div className="lg:text-xs text-[0.675rem]">HUMIDITY</div>
                            <div className="lg:text-sm text-xs font-medium text-slate-200">30%</div>
                          </div>
                          
                      </div>

                  </div>
                  <div className={`${styles.divider} lg:mx-[0.5rem] md:mx-[0.125rem] mx-[0.5rem] list-item w-[1px] h-full`}></div>
                  <div className="grid gap-[2rem]">
                      <div className="flex">
                          <Image src={TemperatureIcon} alt="temperature icon" width={20} height={20} className="inline-block mr-1 mb-1 w-6 h-6" />
                          <div className="flex flex-col">
                            <div className="lg:text-xs text-[0.675rem]">CHARGER</div>
                            <div className="lg:text-sm text-xs font-medium text-slate-200">42° c</div>
                          </div>
                      </div>

                      <div className="flex">
                          <Image src={Humidity} alt="thermostat icon" width={15} height={15} className="inline-block mr-1 mb-1 w-6 h-6" />
                          <div className="flex flex-col">
                            <div className="lg:text-xs text-[0.675rem]">HUMIDITY</div>
                            <div className="lg:text-sm text-xs font-medium text-slate-200">34%</div>
                          </div>
                          
                      </div>

                  </div>
                  <div className={`${styles.divider} lg:mx-[0.5rem] md:mx-[0.125rem] mx-[0.5rem] list-item w-[1px] h-full`}></div>
                  <div className="grid gap-[2rem]">
                      <div className="flex">
                          <Image src={ChargerGun} alt="charger gun icon" width={20} height={20} className="inline-block mr-1 mb-1 w-6 h-6" />
                          <div className="flex flex-col">
                            <div className="lg:text-xs text-[0.675rem]">GUN 1</div>
                            <div className="lg:text-sm text-xs font-medium text-slate-200">29° c</div>
                          </div>
                          
                      </div>

                      <div className="flex">
                          <Image src={ChargerGun} alt="charger gun icon" width={20} height={20} className="inline-block mr-1 mb-1 w-6 h-6" />
                          <div className="flex flex-col">
                            <div className="lg:text-xs text-[0.675rem]">GUN 2</div>
                            <div className="lg:text-sm text-xs font-medium text-slate-200">39° c</div>
                          </div>
                      </div>

                  </div>
              </div>
      </div>
    </section>
  );
}
