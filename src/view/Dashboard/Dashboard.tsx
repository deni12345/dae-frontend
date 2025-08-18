import { TabsContainer } from "@/components/app-tabs/AppTabs";
import { useMemo, useState } from "react";
import TabHeader from "./TabHeader";
import TabContent from "./TabContent";
import DashboardMenu from "./Menu";

const mockSheetTabs = [
  {
    sheet: "Happy Party",
    menu: {
      foods: [
        { name: "Pizza 1", price: 10 },
        { name: "Burger 2", price: 8 },
        { name: "Salad 3", price: 5 },
        { name: "Burger 4", price: 8 },
        { name: "Salad 5", price: 5 },
        { name: "Pizza 6", price: 10 },
        { name: "Burger 7", price: 8 },
        { name: "Salad 8", price: 5 },
        { name: "Burger 9", price: 8 },
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
  const [activeSheetTab, setActiveSheetTab] = useState<string>(
    mockSheetTabs[0].sheet || ""
  );

  if (mockSheetTabs.length === 0) {
    return (
      <div className="text-center text-muted-foreground">
        No sheets available
      </div>
    );
  }

  const sheetTabs = useMemo(
    () => mockSheetTabs.map((tab) => tab.sheet),
    [mockSheetTabs]
  );
  const menu = useMemo(
    () => mockSheetTabs.find((m) => m.sheet === activeSheetTab)?.menu || {},
    [activeSheetTab, mockSheetTabs]
  );

  return (
    <TabsContainer
      className="w-full h-full gap-4 flex-nowrap"
      value={activeSheetTab}
      onValueChange={setActiveSheetTab}
      defaultValue={sheetTabs[0]}
    >
      <TabHeader tabs={sheetTabs} />
      <TabContent value={activeSheetTab} className="p-3 bg-accent rounded-md">
        <DashboardMenu menu={menu} menuTabs={Object.keys(menu)} />
      </TabContent>
    </TabsContainer>
  );
};

export default Dashboard;
