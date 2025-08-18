import { TabsContainer } from "@/components/app-tabs/AppTabs";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import TabContent from "./TabContent";
import TabHeader from "./TabHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import MenuItemCard from "./MenuItemCard";

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
    <div className="grid grid-rows-[2rem_minmax(0,1fr)] p-4 gap-4">
      <header className="flex flex-row justify-between items-center">
        <h2 className="text-lg font-bold">Menu</h2>
        <Button>
          <Plus />
          Add Menu Tab
        </Button>
      </header>
      <TabsContainer
        className="gap-4 min-w-0"
        value={activeMenuTab}
        onValueChange={setActiveMenuTab}
      >
        <TabHeader tabs={menuTabs} />
        <TabContent value={activeMenuTab}>
          <Carousel className="w-full">
            <CarouselContent className="-ml-4 ">
              {menu[activeMenuTab] &&
                Array.from({
                  length: Math.ceil(menu[activeMenuTab].length / 4),
                }).map((_, chunkIndex) => {
                  const startIndex = chunkIndex * 4;
                  const splitItems = menu[activeMenuTab].slice(
                    startIndex,
                    startIndex + 4
                  );
                  return (
                    <CarouselItem
                      key={chunkIndex}
                      className="lg:basis-1/2 pl-4 basis-1/2 grid"
                    >
                      <div className="grid grid-cols-2 grid-rows-2 gap-4">
                        {splitItems.map((item: any, itemIndex: number) => (
                          <MenuItemCard item={item} key={itemIndex} />
                        ))}
                      </div>
                    </CarouselItem>
                  );
                })}
            </CarouselContent>
          </Carousel>
        </TabContent>
      </TabsContainer>
    </div>
  );
};

export default DashboardMenu;
