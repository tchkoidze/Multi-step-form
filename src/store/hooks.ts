import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux/es/types";
import { AppDispatch, RootState } from "./redux";

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
