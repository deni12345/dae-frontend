import { LayoutDashboard, Settings, UserRound } from "lucide-react";
import type {} from "./app-sidebar";
import type { GroupMenuItem } from "./app-sidebar.types";

export const sidebarMenuItems: GroupMenuItem[] = [
  {
    title: "Main",
    items: [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Settings",
        href: "/settings",
        icon: Settings,
      },
      {
        title: "Profile",
        href: "/profile",
        icon: UserRound,
      },
    ],
  },
];
