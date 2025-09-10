import { memo, useEffect, useMemo, useState } from "react";
import DashboardMenu from "./DashboardMenu";
import { mockSheetTabs } from "./MockMenuData";
import { useGetOrdersInfiniteQuery } from "@/api/orders";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";

export const Dashboard = memo(() => {
  const { t } = useTranslation();
  const { data, isFetching, fetchNextPage } = useGetOrdersInfiniteQuery(20);
  const [activeSheetTab, setActiveSheetTab] = useState<string>(
    mockSheetTabs[0].sheet || ""
  );

  const wheelGestures = useMemo(
    () => WheelGesturesPlugin({ forceWheelAxis: "y" }),
    []
  );

  if (mockSheetTabs.length === 0) {
    return (
      <div className="text-center text-muted-foreground">
        No sheets available
      </div>
    );
  }

  const menu = useMemo(
    () =>
      mockSheetTabs.find((m) => m.sheet === activeSheetTab)?.menu ||
      mockSheetTabs[0].menu,
    [activeSheetTab, mockSheetTabs]
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="w-full gap-4 flex-nowrap flex flex-col">
      <DashboardMenu menu={menu} menuTabs={Object.keys(menu)} />
      <div className="flex flex-row gap-4 p-4 bg-white rounded-lg">
        <div className="flex flex-col lg:flex-2/3">
          <header className="flex-1/4">
            <h2 className="text-lg font-bold">{t("WelcometoReact")}</h2>
          </header>
          <Carousel
            className="w-full h-full"
            orientation="vertical"
            opts={{ align: "start", loop: false }}
            plugins={[wheelGestures]}
          >
            <CarouselContent className="-mt-1 h-[32rem]">
              {isFetching ? (
                <div>Loading...</div>
              ) : (
                data?.pages.map((page) =>
                  page.items.map((item, itemIndex) => (
                    <CarouselItem
                      key={`${page.items[0].id}`}
                      className="pt-1 flex-1/4"
                    >
                      <div
                        key={item.id}
                        className="flex flex-row flex-wrap lg:flex-row lg:p-4 lg:gap-4 bg-white border gap-1 border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        <img
                          src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg"
                          className="object-cover lg:rounded-lg h-40 w-full lg:w-40"
                        />
                        <div className="flex flex-1 flex-col gap-1">
                          <div className="flex flex-row justify-between ">
                            <h2 className="lg:text-2xl text-lg font-semibold text-card-foreground inline">
                              {item.food}
                            </h2>
                            <p>{item.userName}</p>
                          </div>
                          <p className="">{item.note}</p>
                          <p className="flex-1">
                            {item.price} x {item.quantity}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))
                )
              )}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="lg:flex-1/3"></div>
      </div>
    </div>
  );
});
