import { memo, useMemo } from "react";
import DashboardMenu from "./DashboardMenu";
import { mockSheet } from "./MockMenuData";
import { useTranslation } from "react-i18next";
import DashboardOrders from "./DashboardOrders";

export const Dashboard = memo(() => {
  const { t } = useTranslation();

  if (!mockSheet) {
    return (
      <div className="text-center text-muted-foreground">{t("NoSheets")}</div>
    );
  }
  const menu = useMemo(() => mockSheet.menu, [mockSheet]);

  return (
    <div className="w-full gap-4 flex-nowrap flex flex-col">
      <DashboardMenu menu={menu} menuTabs={Object.keys(menu)} />
      <div className="grid lg:grid-cols-[minmax(500px,800px)_1fr] gap-4 p-4 bg-white rounded-lg">
        <DashboardOrders />
        <div>{t("Label.ComingSoon")}</div>
      </div>
    </div>
  );
});
