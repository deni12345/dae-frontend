import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createStore } from "redux";
import { rootReducer } from "@/redux/reducer.ts";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
