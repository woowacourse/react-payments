import { ErrorAction } from "../types/CardInformationType";
import { Dispatch } from "react";

export const setErrorTrue = (type: ErrorAction["type"], index: number, dispatchError: Dispatch<ErrorAction>) => {
  dispatchError({ type, index, value: true });
};

export const setErrorFalse = (type: ErrorAction["type"], index: number, dispatchError: Dispatch<ErrorAction>) => {
  dispatchError({ type, index, value: false });
};
