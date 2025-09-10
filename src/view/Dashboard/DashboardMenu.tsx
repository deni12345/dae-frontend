import { use, useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Plus } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import DishCard from "../../components/cards/DishCard";
import type { MenuTab, SheetMenu } from "./MockMenuData";
import { TabContent, TabHeader, TabsContainer } from "@/components";

interface DashboardMenuProps {
  menu: SheetMenu;
  menuTabs: string[];
}

const DashboardMenu = ({ menu, menuTabs }: DashboardMenuProps) => {
  const [activeMenuTab, setActiveMenuTab] = useState<string>(menuTabs[0]);
  const [api, setApi] = useState<CarouselApi>(undefined);
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

  useEffect(() => {
    if (!api) return;

    const handler = () => {
      setLoadedMenuItems((prev) => {
        if (prev.length >= groupMenuItems.length) {
          api.off("slidesInView", handler);
          return prev;
        }
        const inView = api.slidesInView();
        return [...new Set([...prev, ...inView])];
      });
    };

    handler();
    api.on("slidesInView", handler);

    return () => {
      api.off("slidesInView", handler);
    };
  }, [api, groupMenuItems, setLoadedMenuItems]);

  const carouselItems = useMemo(() => {
    return groupMenuItems.map((group, chunkIndex) => {
      return (
        <CarouselItem
          key={chunkIndex}
          className="lg:basis-1/2 pl-4 basis-10/12 grid"
        >
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {loadedMenuItems.includes(chunkIndex) ? (
              group.map((item, itemIndex: number) => (
                <DishCard item={item} key={itemIndex} />
              ))
            ) : (
              <LoaderCircle className="animate-spin" />
            )}
          </div>
        </CarouselItem>
      );
    });
  }, [groupMenuItems, loadedMenuItems]);

  return (
    <div className="grid grid-rows-[2rem_minmax(0,1fr)] gap-4 p-4 bg-white rounded-lg">
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
          <Carousel
            className="w-full bg-white"
            setApi={setApi}
            opts={{ dragFree: true }}
          >
            <CarouselContent className="-ml-4">{carouselItems}</CarouselContent>
          </Carousel>
        </TabContent>
      </TabsContainer>
    </div>
  );
};

export default DashboardMenu;
