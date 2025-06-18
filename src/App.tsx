import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { testDispatch } from "./redux/userSlice";
import { userSelector } from "./redux/userSlice";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar/AppSidebar";
import { sidebarMenuItems } from "./types/app-sidebar.data";
import { useCallback, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import reactLogo from "./assets/react.svg";
import { Outlet } from "react-router-dom";
import type { AppDispatch } from "./redux/store";

function App() {
  const user = useSelector(userSelector);
  const dispatch = useDispatch<AppDispatch>();
  const setUserHandler = useCallback(
    () => dispatch(testDispatch("liem")),
    [dispatch]
  );

  useEffect(() => {
    setUserHandler();
  }, [setUserHandler]);

  useEffect(() => {
    console.log("User data:", user);
  }, [user]);

  return (
    <SidebarProvider>
      <AppSidebar title={"Drind And Eat"} groups={sidebarMenuItems} />
      <main className="w-full flex flex-col dark:bg-background">
        <header className="p-5 h-15 flex justify-between border-border border-b-1">
          <h1 className="text-white font-bold">Welcome to Drind And Eat</h1>
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
