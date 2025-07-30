export type RootState = {
  user: UserState;
};

export type UserState = {
  name: string;
  email: string;
  birthdate: string;
  createdAt?: string;
};
