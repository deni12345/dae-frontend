import type { Action } from "redux";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const rootReducer = (state: any, action: Action) => {
  switch (action.type) {
    case "user/setUser":
      return {
        ...state,
      };

    default:
      return state;
  }
};
