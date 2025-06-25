import { Tabs } from "@/components/ui/tabs";
import { useCallback, useEffect, useState } from "react";

type LineStyle = {
  width: number;
  left: number;
  top: number;
};

export function AppTabs({
  children,
  ...props
}: React.ComponentProps<typeof Tabs>) {
  const [activeTab, setActiveTab] = useState<string>("account");
  const [lineStyle, setLineStyle] = useState<LineStyle | null>(null);

  const onValueChange = useCallback(
    (value: string) => {
      setActiveTab(value);
    },
    [setActiveTab]
  );

  // Update underline position when active tab changes
  useEffect(() => {
    const activeTabElement = document.querySelector("[data-state='active']");

    if (activeTabElement) {
      const { width, left, bottom } = activeTabElement.getBoundingClientRect();
      setLineStyle({
        width,
        left,
        top: bottom + 3, // Add 2px spacing between tab and underline
      });
    }
  }, [activeTab]);

  return (
    <Tabs value={activeTab} onValueChange={onValueChange} {...props}>
      {children}
      {lineStyle && (
        <div
          className="bg-foreground absolute h-[2px] transition-all duration-150 ease-in-out"
          style={{
            width: `${lineStyle.width}px`,
            left: `${lineStyle.left}px`,
            top: `${lineStyle.top}px`,
          }}
        />
      )}
    </Tabs>
  );
}
