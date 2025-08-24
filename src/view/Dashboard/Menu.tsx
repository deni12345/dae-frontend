import { TabsContainer } from "@/components/app-tabs/AppTabs";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Plus } from "lucide-react";
import TabContent from "./TabContent";
import TabHeader from "./TabHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import MenuItemCard from "./MenuItemCard";
import type { MenuTab, SheetMenu } from "./MockSheetData";

interface DashboardMenuProps {
  menu: SheetMenu;
  menuTabs: string[];
}

const DashboardMenu = ({ menu, menuTabs }: DashboardMenuProps) => {
  const [activeMenuTab, setActiveMenuTab] = useState<string>(menuTabs[0]);
  const [api, setApi] = useState<CarouselApi>();
  const [loadedMenuItems, setLoadedMenuItems] = useState<number[]>([]);

  if (!menu) {
    return (
      <div className="flex flex-col p-6 gap-4">
        <p className="text-gray-500">No menu items available.</p>
      </div>
    );
  }

  const selectedMenu = useMemo(() => {
    return menuTabs.includes(activeMenuTab)
      ? menu[activeMenuTab as MenuTab]
      : [];
  }, [activeMenuTab, menu]);

  const groupMenuItems = useMemo(() => {
    return Array.from({ length: Math.ceil(selectedMenu.length / 4) }).map(
      (_, index) => {
        const startIndex = index * 4;
        return selectedMenu.slice(startIndex, startIndex + 4);
      }
    );
  }, [selectedMenu]);

  const loadMoreMenuItems = useCallback(
    (api: CarouselApi, totalGroups: any) => {
      if (!api) return;

      setLoadedMenuItems((prev) => {
        if (prev.length >= totalGroups.length) return prev;
        const inView = api.slidesInView();
        return [...new Set([...prev, ...inView])];
      });
    },
    [api]
  );

  useEffect(() => {
    if (!api) return;
    const handler = () => loadMoreMenuItems(api, groupMenuItems);
    api.on("slidesInView", handler);

    return () => {
      api.off("slidesInView", handler);
    };
  }, [api, loadMoreMenuItems, groupMenuItems]);

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
          <Carousel className="w-full" setApi={setApi}>
            <CarouselContent className="-ml-4 ">
              {groupMenuItems.map((group, chunkIndex) => {
                return (
                  <CarouselItem
                    key={chunkIndex}
                    className="lg:basis-1/2 pl-4 basis-10/12 grid"
                  >
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                      {loadedMenuItems.includes(chunkIndex) ? (
                        group.map((item: any, itemIndex: number) => (
                          <MenuItemCard item={item} key={itemIndex} />
                        ))
                      ) : (
                        <LoaderCircle className="animate-spin" />
                      )}
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
