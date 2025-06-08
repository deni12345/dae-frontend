import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "./redux/user-slice";
import { userSelector } from "./redux/user-slice";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar/app-sidebar";
import { sidebarMenuItems } from "./components/app-sidebar/app-sidebar.data";
import { useCallback, useEffect } from "react";

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
      <main></main>
    </SidebarProvider>
  );
}

export default App;
