import type { GroupMenuItem } from "@/types/AppSidebar";
import { House, History, Trophy, User, Settings } from "lucide-react";

export const menuItems: GroupMenuItem[] = [
  {
    title: "Navigation",
    items: [
      {
        title: "Dashboard",
        href: "/",
        icon: House,
      },
      {
        title: "History",
        href: "/history",
        icon: History,
      },
      {
        title: "Rank",
        href: "/rank",
        icon: Trophy,
      },
    ],
  },
  {
    title: "Settings",
    items: [
      {
        title: "Profile",
        href: "/profile",
        icon: User,
      },
      {
        title: "Settings",
        href: "/settings",
        icon: Settings,
      },
    ],
  },
];
