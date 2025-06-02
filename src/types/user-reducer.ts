export type RootState = {
  user: UserState;
};

export type UserState = {
  name: string;
  email: string;
  birthdate: string;
  createdAt?: string;
};

export enum UserActionEnum {
  SET_USER = "SET_USER",
  EDIT_USER = "EDIT_USER",
}

export type SetUserAction = {
  type: UserActionEnum.SET_USER;
  payload: UserState;
};

export type EditUserAction = {
  type: UserActionEnum.EDIT_USER;
  payload: Partial<UserState>;
};

export type UserAction = SetUserAction | EditUserAction;
