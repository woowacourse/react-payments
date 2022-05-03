import React, { createContext, Dispatch, useReducer } from 'react';
import { ActionType } from '../types';

export type State = {
  firstInputCardNumber: string;
  secondInputCardNumber: string;
  thirdInputCardNumber: string;
  fourthInputCardNumber: string;
  name: string;
  expiredPeriod: string;
  cvc: string;
  firstPassword: string;
  secondPassword: string;
};

type Action =
  | { type: ActionType.FIRST_INPUT_CARD_NUMBER; payload: any }
  | { type: ActionType.SECOND_INPUT_CARD_NUMBER; payload: any }
  | { type: ActionType.THIRD_INPUT_CARD_NUMBER; payload: any }
  | { type: ActionType.FOURTH_INPUT_CARD_NUMBER; payload: any }
  | { type: ActionType.INPUT_NAME; payload: any }
  | { type: ActionType.INPUT_EXPIRED_PERIOD; payload: any }
  | { type: ActionType.INPUT_CVC; payload: any }
  | { type: ActionType.FIRST_INPUT_PASSWORD; payload: any }
  | { type: ActionType.SECOND_INPUT_PASSWORD; payload: any };

export type AppDispatch = Dispatch<Action>;

const initalState: State = {
  firstInputCardNumber: '',
  secondInputCardNumber: '',
  thirdInputCardNumber: '',
  fourthInputCardNumber: '',
  name: '',
  expiredPeriod: '',
  cvc: '',
  firstPassword: '',
  secondPassword: '',
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
    case ActionType.FIRST_INPUT_CARD_NUMBER:
      return {
        ...state,
        firstInputCardNumber: action.payload,
      };
    case ActionType.SECOND_INPUT_CARD_NUMBER:
      return {
        ...state,
        secondInputCardNumber: action.payload,
      };
    case ActionType.THIRD_INPUT_CARD_NUMBER:
      return {
        ...state,
        thirdInputCardNumber: action.payload,
      };
    case ActionType.FOURTH_INPUT_CARD_NUMBER:
      return {
        ...state,
        fourthInputCardNumber: action.payload,
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
    case ActionType.FIRST_INPUT_PASSWORD:
      return {
        ...state,
        firstPassword: action.payload,
      };
    case ActionType.SECOND_INPUT_PASSWORD:
      return {
        ...state,
        secondPassword: action.payload,
      };
  }
}

function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <>
      <AppStateContext.Provider value={state}>
        <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
      </AppStateContext.Provider>
    </>
  );
}

export default AppProvider;
