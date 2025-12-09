export type NotificationItem = {
  id: string;
  timestamp: string;
  title: string;
  message?: string;
  level?: "info" | "warning" | "critical" | "success";
  code?: string;
  read?: boolean;
  href?: string;
};

export const NOTIFICATIONS: NotificationItem[] = [
  {
    id: "n-001",
    timestamp: "13/06/2025 | 09:04:34",
    title: "OverCurrentFailure",
    level: "warning",
    code: "000004",
    read: false,
    href: "/notifications/n-001",
  },
  {
    id: "n-002",
    timestamp: "13/06/2025 | 08:09:13",
    title: "The EVSE has no internet connectivity",
    level: "critical",
    code: "000013",
    read: false,
    href: "/notifications/n-002",
  },
  {
    id: "n-003",
    timestamp: "13/06/2025 | 08:04:11",
    title: "PowerLoss",
    level: "warning",
    code: "000015",
    read: true,
    href: "/notifications/n-003",
  },
  {
    id: "n-004",
    timestamp: "13/06/2025 | 07:32:46",
    title: "REMOTE_STOP",
    level: "warning",
    code: "001004",
    read: true,
    href: "/notifications/n-004",
  },
  {
    id: "n-005",
    timestamp: "12/06/2025 | 22:04:34",
    title: "Power Loss",
    level: "critical",
    code: "000015",
    read: true,
    href: "/notifications/n-005",
  },
  {
    id: "n-006",
    timestamp: "12/06/2025 | 22:01:42",
    title: "NFC_STOP",
    level: "warning",
    code: "001003",
    read: true,
    href: "/notifications/n-006",
  },
  {
    id: "n-007",
    timestamp: "12/06/2025 | 20:48:14",
    title: "UNREGISTERED_THE_CARD",
    level: "warning",
    code: "002000",
    read: true,
    href: "/notifications/n-007",
  },
];
