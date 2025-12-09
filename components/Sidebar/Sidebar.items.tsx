import { StaticImageData } from "next/image";
import Dashboard from "../../public/dashboard.png";
import Graph from "../../public/graph_6.png";
import Charger from "../../public/charger.png";
import Notifications from "../../public/notification_important.png";
import Warning from "../../public/warning.png";
import Account from "../../public/account_circle.png";
import Settings from "../../public/confirmation_number.png";

export type SidebarItem = {
  id: string;
  label: string;
  href: string;
  iconPlaceholder: string;
  badge?: string | number;
  source?: StaticImageData;
};

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { id: "dash", label: "Dashboard", href: "/", iconPlaceholder: "I1", source: Dashboard },
  { id: "graph", label: "Graph", href: "/graph", iconPlaceholder: "I2", source: Graph },
  { id: "charger", label: "Charger Management", href: "/charger", iconPlaceholder: "I3", source: Charger },
  { id: "notifications", label: "Notifications", href: "/notifications", iconPlaceholder: "I4", source: Notifications, badge: 3 },
  { id: "warning", label: "Warning", href: "/warning", iconPlaceholder: "I5", source: Warning },
  { id: "account", label: "Account", href: "/account", iconPlaceholder: "I4", source: Account },
  { id: "settings", label: "Settings", href: "/settings", iconPlaceholder: "I5", source: Settings },
];
