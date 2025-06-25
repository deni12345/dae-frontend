import { type UserState } from "@/types/State";
import { createSlice } from "@reduxjs/toolkit";

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
    setUser: (state, action) => {
      console.log("state: ", state);
      console.log("action: ", action);
    },
    updateUserName: (state, action) => {
      state.name = action.payload.name;
    },
  },
});

export const { setUser, updateUserName } = userSlice.actions;
