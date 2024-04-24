import { useReducer, useState } from "react";

export enum ActionType {
  SET_VALUE = "SET_VALUE",
  SET_ERROR = "SET_ERROR",
  RESET_ERROR = "RESET_ERROR",
}
interface Action {
  type: ActionType;
  value?: string;
  errorMessage?: string;
}

interface InputState {
  value: string;
  errorMessage: string;
  isValid: boolean;
}
const useInput2 = (initialValue: string) => {
  const inputReducer = (state: InputState, action: Action) => {
    switch (action.type) {
      case ActionType.SET_VALUE:
        return {
          ...state,
          value: action.value ?? "[useInput]은 값을 action 인자로 필요합니다.",
        };
      case ActionType.SET_ERROR:
        return {
          ...state,
          errorMessage:
            action.errorMessage ??
            "[useInput]은 에러메세지를 action 인자로 필요합니다.",
          isValid: false,
        };
      case ActionType.RESET_ERROR:
        return { ...state, errorMessage: "", isValid: true };
      default:
        return state;
    }
  };
  return useReducer(inputReducer, {
    value: initialValue,
    errorMessage: "",
    isValid: true,
  });
};

export default useInput2;
