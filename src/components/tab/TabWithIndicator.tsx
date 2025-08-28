import { Tabs } from "@/components/ui/tabs";
import {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type LineStyle = {
  width: number;
  left: number;
  top: number;
};

export const TabsContainer = memo(
  ({
    children,
    defaultValue,
    onValueChange,
    value,
    ...props
  }: React.ComponentProps<typeof Tabs>) => {
    const tabsRef = useRef<HTMLDivElement>(null);
    const [line, setLine] = useState<LineStyle | null>(null);

    const measure = useCallback(() => {
      const root = tabsRef.current;
      if (!root || !value) return;

      const tabList = root.querySelector<HTMLDivElement>('[role="tablist"]');
      const activeTab = root.querySelector<HTMLButtonElement>(
        'button[data-state="active"]'
      );
      if (!activeTab || !tabList) return;

      const a = activeTab.getBoundingClientRect();
      const l = tabList.getBoundingClientRect();
      const r = root.getBoundingClientRect();

      setLine({
        width: a.width,
        left: a.left - r.left,
        top: l.bottom - r.top + 3,
      });
    }, [setLine, value]);

    // Update underline position when active tab changes
    useLayoutEffect(() => {
      measure();
    }, [value, measure]);

    useEffect(() => {
      const ro = new ResizeObserver(() => requestAnimationFrame(measure));
      if (tabsRef.current) ro.observe(tabsRef.current);

      // observing the root helps catch DPR/device emulation changes
      ro.observe(document.documentElement);

      const onResize = () => measure();

      window.addEventListener("resize", onResize);
      window.addEventListener("orientationchange", onResize);

      return () => {
        ro.disconnect();
        window.removeEventListener("resize", onResize);
        window.removeEventListener("orientationchange", onResize);
      };
    }, [measure]);

    return (
      <Tabs
        ref={tabsRef}
        style={{ position: "relative" }}
        value={value}
        onValueChange={onValueChange}
        defaultValue={defaultValue}
        {...props}
      >
        {children}
        {line && (
          <div
            className="bg-foreground absolute h-[2px] transition-transform duration-150 ease-in-out"
            style={{
              width: `${line.width}px`,
              transform: `translateX(${line.left}px)`,
              top: `${line.top}px`,
            }}
          />
        )}
      </Tabs>
    );
  }
);
