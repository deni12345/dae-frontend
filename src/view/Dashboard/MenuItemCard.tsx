import { Button } from "@/components/ui/button";
import { memo } from "react";

interface MenuItemCardProps {
  item: any;
}

const MenuItemCard = ({ item }: MenuItemCardProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white border p-4 gap-4 border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover rounded-lg h-auto w-full lg:w-35"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Tumbler_of_cola_with_ice.jpg"
        alt="drink image"
      />
      <div className="flex flex-col justify-between w-full h-full">
        <div>
          <h3 className="text-lg font-semibold text-card-foreground">
            {item.name}
          </h3>
          <p className="text-secondary-foreground ">${item.price.toFixed(2)}</p>
        </div>
        <Button>Order</Button>
      </div>
    </div>
  );
};

export default memo(MenuItemCard);
