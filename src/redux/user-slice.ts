import { type RootState, type UserState } from "@/types/user-reducer";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserState = {
  name: "",
  email: "",
  birthdate: "",
  createdAt: Date(),
};

export const userSelector = (state: RootState) => state.user;

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
});
