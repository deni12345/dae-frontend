import { Tabs } from "@/components/ui/tabs";
import { useCallback, useEffect, useState } from "react";

type LineStyle = {
  width: number;
  left: number;
  top: number;
};

export function AppTabs({
  children,
  defaultValue,
  ...props
}: React.ComponentProps<typeof Tabs>) {
  const [activeTab, setActiveTab] = useState<string>(defaultValue ?? "");
  const [lineStyle, setLineStyle] = useState<LineStyle | null>(null);

  const onValueChange = useCallback(
    (value: string) => {
      setActiveTab(value);
    },
    [setActiveTab]
  );

  // Update underline position when active tab changes
  useEffect(() => {
    const activeTabElement = Array.from(
      document.querySelectorAll('button[data-state="active"]')
    ).find((button) => button.textContent?.trim() == activeTab);
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
    <Tabs
      value={activeTab}
      onValueChange={onValueChange}
      defaultValue={defaultValue}
      {...props}
    >
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
