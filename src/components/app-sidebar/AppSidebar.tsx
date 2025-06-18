import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { PanelRight } from "lucide-react";
import { useCallback } from "react";
import type { GroupMenuItem, MenuItem } from "./AppSidebar.types";

type AppSidebarProps = {
  title: string;
  groups: GroupMenuItem[];
};

export function AppSidebar({ title, groups }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" className="!border-0">
      <SidebarHeaderWithIcon title={title} />
      <SidebarContent>
        <SidebarGroupMenu groups={groups} />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

function SidebarGroupMenu({ groups }: { groups: GroupMenuItem[] }) {
  return groups.map((group, index) => (
    <SidebarGroup key={index}>
      <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenuWithIcons items={group.items} />
      </SidebarGroupContent>
    </SidebarGroup>
  ));
}

function SidebarMenuWithIcons({ items }: { items: MenuItem[] }) {
  return (
    <SidebarMenu>
      {items.map((item, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuButton onClick={item.onClick}>
            <item.icon />
            {item.title}
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}

function SidebarHeaderWithIcon({ title }: { title: string }) {
  const { setOpen, open } = useSidebar();
  const handlerSidebarToggle = useCallback(() => {
    setOpen(!open);
  }, [setOpen, open]);

  return (
    <SidebarHeader>
      <SidebarMenuButton
        onClick={handlerSidebarToggle}
        className="whitespace-nowrap"
      >
        <PanelRight />
        {title}
      </SidebarMenuButton>
    </SidebarHeader>
  );
}
