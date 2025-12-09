import { createContext } from "react";

export type MobileNotifyContextType = {
  showMobileNotifyScreen: boolean;
  setShowMobileNotifyScreen: (v: boolean) => void;
};

export const MobileNotifyContext = createContext<MobileNotifyContextType>({
  showMobileNotifyScreen: false,
  setShowMobileNotifyScreen: () => {},
});
