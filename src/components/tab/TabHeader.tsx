import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { memo } from "react";

export const TabHeader = memo(({ tabs }: { tabs: string[] }) => {
  return (
    <TabsList className="h-[2.5rem] border-accent border-b-2 rounded-none bg-background-none">
      {tabs.map((tab) => (
        <TabsTrigger
          value={tab}
          className="text-base p-4 rounded-b-none hover:bg-hover"
          key={tab}
        >
          {tab}
        </TabsTrigger>
      ))}
    </TabsList>
  );
});
