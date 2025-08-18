import "./App.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar/AppSidebar";
import { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import reactLogo from "@/assets/react.svg";
import { Outlet } from "react-router-dom";
import { useGetHealthQuery } from "./api/apiService";
import { menuItems } from "@/components";

function App() {
  const { data, isSuccess } = useGetHealthQuery();

  useEffect(() => {
    if (isSuccess) {
      console.log("health data:", data);
    }
  }, [data, isSuccess]);

  return (
    <SidebarProvider>
      <AppSidebar title={"Drind And Eat"} groups={menuItems} />
      <main className="flex flex-col bg-background flex-1 min-w-0">
        <header className="p-5 h-15 flex justify-between border-border border-b-1">
          <p className="text-white font-bold text-xl">
            Welcome to Drind And Eat
          </p>
          <Avatar>
            <AvatarImage src={reactLogo} alt="React Logo" />
            <AvatarFallback className="bg-white">RE</AvatarFallback>
          </Avatar>
        </header>
        <div className="p-5 flex-1">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}

export default App;
