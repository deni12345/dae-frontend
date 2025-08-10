import { TabsContainer } from "@/components/app-tabs/AppTabs";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import TabContent from "./TabContent";
import TabHeader from "./TabHeader";

interface DashboardMenuProps {
  menu: any;
  menuTabs: string[];
}

const DashboardMenu = ({ menu, menuTabs }: DashboardMenuProps) => {
  const [activeMenuTab, setActiveMenuTab] = useState<string>(menuTabs[0] || "");

  if (!menu) {
    return (
      <div className="flex flex-col p-6 gap-4">
        <p className="text-gray-500">No menu items available.</p>
      </div>
    );
  }

  return (
    <>
      <header className="board-header flex justify-between align-middle">
        <h2 className="text-lg font-bold">Menu</h2>
        <Button>
          <Plus />
          Add Menu Tab
        </Button>
      </header>
      <TabsContainer
        className="w-full h-full gap-4"
        value={activeMenuTab}
        onValueChange={setActiveMenuTab}
      >
        <TabHeader tabs={menuTabs} />
        <TabContent value={activeMenuTab}>
          {menu[activeMenuTab]?.map((item: any, index: any) => (
            <div
              key={index}
              className="flex justify-between p-2 border-b border-muted"
            >
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </div>
          ))}
        </TabContent>
      </TabsContainer>
    </>
  );
};

export default DashboardMenu;
