import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { healthAPI } from "@/api/health";
import { ordersAPI } from "@/api/orders";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    [healthAPI.reducerPath]: healthAPI.reducer,
    [ordersAPI.reducerPath]: ordersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(healthAPI.middleware)
      .concat(ordersAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
