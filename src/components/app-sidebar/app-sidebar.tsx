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
import type { GroupMenuItem } from "./app-sidebar.types";

type AppSidebarProps = {
  header: string;
  groupItems?: GroupMenuItem[];
};

export function AppSidebar({ header, groupItems }: AppSidebarProps) {
  const { setOpen, open } = useSidebar();

  const handlerSidebarToggle = useCallback(() => {
    setOpen(!open);
  }, [setOpen, open]);

  return (
    <Sidebar collapsible="icon" className="!border-0">
      <SidebarHeader>
        <SidebarMenuButton
          onClick={handlerSidebarToggle}
          className="whitespace-nowrap"
        >
          <PanelRight />
          {header}
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        {groupItems?.map((group, gIndex) => (
          <SidebarGroup key={gIndex}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item, iIndex) => (
                  <SidebarMenuItem key={iIndex}>
                    <SidebarMenuButton onClick={item.onClick}>
                      <item.icon />
                      {item.title}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
