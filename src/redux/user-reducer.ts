import {
  UserActionEnum,
  type UserAction,
  type UserState,
} from "@/types/user-reducer";

const userInitialState: UserState = {
  name: "",
  email: "",
  birthdate: "",
  CreatedAt: new Date(),
};

 
export const userReducer = (
  state: UserState = userInitialState,
  action: UserAction
) => {
  switch (action.type) {
    case UserActionEnum.SET_USER:
      return {
        ...state,
      };

    default:
      return state;
  }
};
