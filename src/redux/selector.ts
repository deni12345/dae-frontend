import { useSelector } from "react-redux";
import { type RootState } from "./store";

export const userState = useSelector((state: RootState) => state.user);
