"use client";

import ChargerHeader from "@/components/ChargerHeader/ChargerHeader";
import ChargerTabs from "@/components/ChargerTabs/ChargerTabs";
import ChargerDetails from "@/components/ChargingDetails/ChargerDetails";
import Notifications from "@/components/Notifications/Notifications";
import React, { useState } from "react";

import Image from "next/image";
import ChargerBlueprint from "@/public/chager_blueprint.png";
import Back from "@/public/keyboard_backspace_bar.png";
import Next from "@/public/keyboard_nextspace_bar.png";

export default function Home() {
  const [active, setActive] = useState("digital-twin");
  return (
    <div className="min-h-screen w-full font-sans dark:bg-black">
      <ChargerHeader />
      <ChargerTabs active={active} onChange={setActive} />
      <div className="grid grid-cols-4 gap-4 py-2">
        <div className="col-span-1 p-4 rounded-md">
          <Image src={ChargerBlueprint} alt="charger blueprint" width={300} height={400} className="mx-auto h-fit"/>
          <div className="flex justify-between mt-4 px-4 py-1 h-8 w-full bg-[#151727]">
            <Image src={Back} alt="back" width={24} height={24} className="h-6"/>
            <p className="text-xs text-slate-200 flex items-center">Front View</p>
            <Image src={Next} alt="next" width={24} height={24} className="h-6"/>
          </div>
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 rounded-md">
              <ChargerDetails chargerId="I1"/>
            </div>
            <div className="col-span-1 rounded-md">
              <Notifications chargerId="I1"/>
            </div>

          </div>
        </div>
      </div>
      {/* <ChargerDetailsFetcher chargerId="1" /> */}
    </div>
  );
}
