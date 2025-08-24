import { useRoutes } from "react-router-dom";
import App from "@/App";
import { Dashboard, Settings } from "@/view";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "settings", element: <Settings /> },
      ],
    },
    { path: "*", element: <div>404 Not Found</div> },
  ]);

  return routes;
};

export default Router;
