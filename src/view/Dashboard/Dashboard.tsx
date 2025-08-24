import { TabsContainer } from "@/components/app-tabs/AppTabs";
import { memo, useEffect, useMemo, useState } from "react";
import TabHeader from "./TabHeader";
import TabContent from "./TabContent";
import DashboardMenu from "./Menu";
import { mockSheetTabs } from "./MockSheetData";
import { useGetOrdersInfiniteQuery } from "@/api/orders";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";

export const Dashboard = memo(() => {
  const [activeSheetTab, setActiveSheetTab] = useState<string>(
    mockSheetTabs[0].sheet || ""
  );
  const { data, isFetching, fetchNextPage } = useGetOrdersInfiniteQuery(20);

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
    () =>
      mockSheetTabs.find((m) => m.sheet === activeSheetTab)?.menu ||
      mockSheetTabs[0].menu,
    [activeSheetTab, mockSheetTabs]
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

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
        <Button onClick={() => fetchNextPage()}>
          Next Page {isFetching && <LoaderCircle className="animate-spin" />}
        </Button>
      </TabContent>
    </TabsContainer>
  );
});
