import { AppTabs } from "@/components/app-tabs/AppTabs";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  return (
    <AppTabs className="w-full h-full gap-4">
      <TabsList className="h-[2.5rem] border-accent border-b-2 rounded-none bg-background-none">
        <TabsTrigger
          value="account"
          className="text-base p-4 rounded-b-none hover:bg-hover"
        >
          This is a short tab
        </TabsTrigger>
        <TabsTrigger
          value="password"
          className="text-base p-4 rounded-b-none hover:bg-hover"
        >
          This is a very long tab
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div>Hello from Account tab</div>
      </TabsContent>
      <TabsContent value="password" className="bg-accent rounded-md">
        <div className="flex">
          <div>Hello from Password tab</div>
        </div>
      </TabsContent>
    </AppTabs>
  );
};

export default Dashboard;
