import type { Order } from "@/types/Order";
import { memo } from "react";

type OrderCardProps = { order: Order };

const OrderCard = ({ order }: OrderCardProps) => {
  const { food, userName, note, price, quantity } = order;

  return (
    <div className="flex flex-row flex-wrap lg:flex-row lg:p-4 lg:gap-4 bg-white border gap-1 border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg"
        className="object-cover lg:rounded-lg h-40 w-full lg:w-40"
      />
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex flex-row justify-between ">
          <h2 className="lg:text-2xl text-lg font-semibold text-card-foreground inline">
            {food}
          </h2>
          <p>{userName}</p>
        </div>
        <p className="">{note}</p>
        <p className="flex-1">
          {price} x {quantity}
        </p>
      </div>
    </div>
  );
};

export default memo(OrderCard);
