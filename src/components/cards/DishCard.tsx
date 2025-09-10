import { Button } from "@/components/ui/button";
import { Plus, SquarePlus } from "lucide-react";
import { memo } from "react";

interface MenuItemCardProps {
  item: any;
}

const DishCard = ({ item }: MenuItemCardProps) => {
  return (
    <div className="flex flex-col flex-wrap lg:flex-row lg:p-4 lg:gap-4 bg-white border gap-1 border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover lg:rounded-lg h-auto w-full lg:w-25"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Tumbler_of_cola_with_ice.jpg"
        alt="drink image"
      />
      <div className="flex flex-col justify-between flex-1 lg:p-0 p-2 gap-1">
        <h3 className="lg:text-2xl text-lg font-semibold text-card-foreground ">
          {item.name}
        </h3>
        <div className="flex flex-row justify-between">
          <p className="text-lg font-medium text-amber-600">
            ${item.price.toFixed(2)}
          </p>
          <Button
            variant="secondary"
            size="icon"
            className="size-8 bg-amber-600 hover:bg-amber-700"
          >
            <Plus className="text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(DishCard);
