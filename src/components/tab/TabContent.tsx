import { TabsContent } from "@/components/ui/tabs";
import React, { memo, type ReactElement } from "react";

interface DashboardTabContentProps
  extends React.ComponentProps<typeof TabsContent> {
  value: string;
  children: ReactElement | ReactElement[];
}

export const TabContent = memo(
  ({ value, children, ...props }: DashboardTabContentProps) => {
    if (!value) {
      return (
        <TabsContent value={""}>
          <div className="flex flex-col p-6 gap-4">
            <p className="text-gray-500">No active dashboard tab selected.</p>
          </div>
        </TabsContent>
      );
    }

    return (
      <TabsContent value={value} className="bg-accent rounded-md" {...props}>
        {children}
      </TabsContent>
    );
  }
);
