import { useReducer } from "react";

export enum ActionType {
  SET_VALUE = "SET_VALUE",
  SET_ERROR = "SET_ERROR",
  RESET_ERROR = "RESET_ERROR",
}

interface SetValueAction {
  type: ActionType.SET_VALUE;
  value: string;
}
interface SetErrorAction {
  type: ActionType.SET_ERROR;
  errorMessage: string;
}
interface ResetErrorAction {
  type: ActionType.RESET_ERROR;
}
type Action = SetValueAction | SetErrorAction | ResetErrorAction;

interface InputState {
  value: string;
  errorMessage: string;
  isValid: boolean;
}

const useInput = (initialValue: string) => {
  return useReducer(inputReducer, {
    value: initialValue,
    errorMessage: "",
    isValid: true,
  });
};

const inputReducer = (state: InputState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_VALUE:
      return {
        ...state,
        value: action.value,
      };
    case ActionType.SET_ERROR:
      return {
        ...state,
        errorMessage: action.errorMessage,
        isValid: false,
      };
    case ActionType.RESET_ERROR:
      return { ...state, errorMessage: "", isValid: true };
    default:
      return state;
  }
};
export default useInput;
