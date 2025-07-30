import "./index.css";
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import Router from "@/router";

hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <StrictMode>
      <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      </Provider>
  </StrictMode>
);
