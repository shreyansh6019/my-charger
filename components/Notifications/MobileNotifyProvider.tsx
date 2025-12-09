"use client";

import React, { useState } from "react";
import { MobileNotifyContext } from "@/context/MobileNotifyContext";

type Props = { children: React.ReactNode };

export default function MobileNotifyProvider({ children }: Props) {
  const [showMobileNotify, setShowMobileNotify] = useState(false);

  return (
    <MobileNotifyContext.Provider value={{ showMobileNotifyScreen: showMobileNotify, setShowMobileNotifyScreen: setShowMobileNotify }}>
      {children}
    </MobileNotifyContext.Provider>
  );
}
