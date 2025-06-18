import { type RootState, type UserState } from "@/types/reducer";
import { createSlice } from "@reduxjs/toolkit";
import type { AppDispatch } from "./store";

const initialState: UserState = {
  name: "",
  email: "",
  birthdate: "",
  createdAt: Date(),
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (__, action) => {
      return action.payload;
    },
    updateUserName: (state, action) => {
      state.name = action.payload.name;
    },
  },
  extraReducers: () => {},
});

export const userSelector = (state: RootState) => state.user;

// The testDispatch action creator
export const testDispatch = (name: string) => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    const user = getState().user;
    console.log("user", user);
    console.log("Current user state:", name);
  };
};
