import { useRoutes } from "react-router-dom";
import App from "@/App";
import { Dashboard, UserSetting } from "@/view";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "settings", element: <UserSetting /> },
      ],
    },
    { path: "*", element: <div>404 Not Found</div> },
  ]);

  return routes;
};

export default Router;
