"use client";

import React from "react";
import Diaganosis from "./Diaganosis";
import ChargerStatus from "./ChargerStatus";
import ChargerMCB from "./ChargerMCB";
import Emergency from "./Emergency";
import Temperature from "./Temperature";
import ChargerGunStatus from "./ChargerGunStatus";
import styles from "./ChargerDetails.module.css";
import useChargerDetails from "@/hooks/useDiaganostic";
import useChargerStatus from "@/hooks/useChargerStatus";

type Props = {
  chargerId?: string;
  className?: string;
};

export default function ChargerDetails({ chargerId, className }: Props) {
  console.log("Just used hooks implementation but as I have been unknow to chagerID so api is giving error...");
  
  const { data: details, loading: loadingDetails } = useChargerDetails(chargerId);
  const { data: status, loading: loadingStatus } = useChargerStatus(chargerId, {
    pollIntervalMs: 10000,
  });
  
  return (
    <div className={`w-full ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className={`grid grid-cols-1 gap-3 md:grid-cols-4 ${styles.panelScroll}`}>
          <div className="col-span-1 md:col-span-1">
            <Diaganosis />
          </div>
          <div className="col-span-1 md:col-span-3">
            <ChargerStatus />
          </div>
          <div className="col-span-1 md:col-span-2">
            <ChargerMCB />
          </div>
          <div className="col-span-1 md:col-span-2">
            <Emergency />
          </div>
          <div className="col-span-1 md:col-span-3">
            <Temperature />
          </div>
          <div className="col-span-1 md:col-span-1">
            <ChargerGunStatus />
          </div>
        </div>
      </div>
    </div>
  );
}
