import { AppTabs } from "@/components/app-tabs/AppTabs";
import { Button } from "@/components/ui/button";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";

const mockSheetTabs = [
  {
    sheet: "Happy Party",
    menu: {
      foods: [
        { name: "Pizza", price: 10 },
        { name: "Burger", price: 8 },
        { name: "Salad", price: 5 },
      ],
      drinks: [
        { name: "Coke", price: 2 },
        { name: "Water", price: 1 },
        { name: "Beer", price: 5 },
      ],
      drinkToppings: [
        { name: "Lemon", price: 0.5 },
        { name: "Mint", price: 1 },
        { name: "Ice", price: 0.2 },
      ],
    },
  },
  {
    sheet: "Anniversary Celebration",
    menu: {
      foods: [
        { name: "Rice", price: 10 },
        { name: "Noodles", price: 8 },
        { name: "Salad", price: 5 },
      ],
      drinks: [
        { name: "Milk", price: 2 },
        { name: "Water", price: 1 },
        { name: "Juice", price: 5 },
      ],
      drinkToppings: [
        { name: "Lemon", price: 0.5 },
        { name: "Mint", price: 1 },
        { name: "Ice", price: 0.2 },
      ],
    },
  },
];

const Dashboard = () => {
  if (mockSheetTabs.length === 0) {
    return (
      <div className="text-center text-muted-foreground">
        No sheets available
      </div>
    );
  }

  return (
    <AppTabs
      className="w-full h-full gap-4"
      defaultValue={mockSheetTabs[0].sheet}
    >
      <TabsList className="h-[2.5rem] border-accent border-b-2 rounded-none bg-background-none">
        {mockSheetTabs.map((tab) => (
          <TabsTrigger
            value={tab.sheet}
            className="text-base p-4 rounded-b-none hover:bg-hover"
            key={tab.sheet}
          >
            {tab.sheet}
          </TabsTrigger>
        ))}
      </TabsList>
      {mockSheetTabs.map((tab) => (
        <TabsContent
          value={tab.sheet}
          className="bg-accent rounded-md"
          key={tab.sheet}
        >
          <div className="flex flex-col p-6 gap-4">
            <header className="board-header flex justify-between align-middle">
              <h2 className="text-lg font-bold">Menu</h2>
              <Button>
                <Plus />
                Add Menu Tab
              </Button>
            </header>
            <AppTabs
              className="w-full h-full gap-4"
              defaultValue={Object.keys(tab.menu)[0]}
            >
              <TabsList className="h-[2.5rem] border-accent border-b-2 rounded-none bg-background-none">
                {Object.keys(tab.menu).map((menuType, index) => (
                  <TabsTrigger
                    value={menuType}
                    key={index}
                    className="text-base p-4 rounded-b-none hover:bg-hover"
                  >
                    {menuType}
                  </TabsTrigger>
                ))}
              </TabsList>
              {Object.entries(tab.menu).map(([menuType, items]) => (
                <TabsContent
                  value={menuType}
                  className="bg-accent rounded-md"
                  key={menuType}
                >
                  <div className="flex flex-col gap-2">
                    {items.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between p-2 border-b border-muted"
                      >
                        <span>{item.name}</span>
                        <span>${item.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </AppTabs>
          </div>
        </TabsContent>
      ))}
    </AppTabs>
  );
};

export default Dashboard;
