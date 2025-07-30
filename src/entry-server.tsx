import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Router from "@/router";
import { Provider } from "react-redux";
import { store } from "./redux/store";

interface IRenderProps {
  path: string;
}

export function render({ path }: IRenderProps) {
  const html = renderToString(
    <StrictMode>
      <Provider store={store}>
        <StaticRouter location={path}>
          <Router />
        </StaticRouter>
      </Provider>
    </StrictMode>
  );
  return { html };
}
