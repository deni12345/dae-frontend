import { LayoutDashboard, Settings, UserRound } from "lucide-react";
import type {} from "../components/app-sidebar/AppSidebar";
import type { GroupMenuItem } from "../components/app-sidebar/AppSidebar.types";

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
