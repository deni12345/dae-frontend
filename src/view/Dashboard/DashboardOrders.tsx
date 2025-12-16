import { useGetOrdersInfiniteQuery } from "@/api/orders";
import OrderCard from "@/components/cards/OrderCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import { memo, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";

const DashboardOrders = () => {
  const { t } = useTranslation();
  const { data, isFetching, fetchNextPage } = useGetOrdersInfiniteQuery(10);
  const wheelGestures = useMemo(
    () => WheelGesturesPlugin({ forceWheelAxis: "y" }),
    []
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="flex flex-col lg:flex-2/3 gap-4">
      <header className="flex-1/4">
        <h2 className="text-lg font-bold">{t("Label.AllOrders")}</h2>
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
                  <OrderCard order={item} key={itemIndex} />
                </CarouselItem>
              ))
            )
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default memo(DashboardOrders);
