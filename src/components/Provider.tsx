import React, { createContext, Dispatch, useReducer } from 'react';
import { ActionType } from '../types';

export type State = {
  cardNumber: string;
  name: string;
  expiredPeriod: string;
  cvc: string;
  password: Array<string>;
  isEditingCVC: boolean;
};

type Action =
  | { type: ActionType.INPUT_CARDNUMBER; payload: any }
  | { type: ActionType.INPUT_NAME; payload: any }
  | { type: ActionType.INPUT_EXPIRED_PERIOD; payload: any }
  | { type: ActionType.INPUT_CVC; payload: any }
  | { type: ActionType.INPUT_PASSWORD; payload: any }
  | { type: ActionType.UPDATE_EDITING_CVC; payload: any };

export type AppDispatch = Dispatch<Action>;

const initalState: State = {
  cardNumber: '',
  name: '',
  expiredPeriod: '',
  cvc: '',
  password: ['', ''],
  isEditingCVC: false,
};

// context를 전역에 선언한다
export const AppStateContext = createContext<State>(initalState);
export const AppDispatchContext = createContext<AppDispatch>(() => null);

export function createAction(type: ActionType, payload: any): Action {
  return {
    type,
    payload,
  };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.INPUT_CARDNUMBER:
      return {
        ...state,
        cardNumber: action.payload,
      };
    case ActionType.INPUT_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case ActionType.INPUT_EXPIRED_PERIOD:
      return {
        ...state,
        expiredPeriod: action.payload,
      };
    case ActionType.INPUT_CVC:
      return {
        ...state,
        cvc: action.payload,
      };
    case ActionType.INPUT_PASSWORD:
      return {
        ...state,
        password: [...action.payload],
      };
    case ActionType.UPDATE_EDITING_CVC:
      return {
        ...state,
        isEditingCVC: action.payload,
      };
    default: {
      return { ...state };
    }
  }
}

function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

export default AppProvider;
