import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "./redux/user-slice";
import { userSelector } from "./redux/user-slice";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar/app-sidebar";
import { sidebarMenuItems } from "./components/app-sidebar/app-sidebar.data";
import { useCallback, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import reactLogo from './assets/react.svg';
import { Outlet } from "react-router-dom";

function App() {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const setUserHandler = useCallback(
    () =>
      dispatch(
        userSlice.actions.setUser({
          name: "John Doe",
          email: "nondasdase",
          birthdate: "sdsadsadasdsds",
          createdAt: Date(),
        })
      ),
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
      <AppSidebar header={"Drind And Eat"} groupItems={sidebarMenuItems} />
      <main className="w-full flex flex-col dark:bg-background">
        <header className="p-5 h-15 flex justify-between border-accent border-b-1">
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
