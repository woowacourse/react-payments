import React, { createContext, Dispatch, useReducer } from "react";
import { ActionType } from "../types";

export type State = {
  cardNumber: string,
  name: string,
  expiredPeriod: string,
  cvc: string,
}

type Action = 
  | { type: ActionType.INPUT_CARDNUMBER , payload: string }
  | { type: ActionType.INPUT_NAME, payload: string }
  | {type: ActionType.INPUT_EXPIRED_PERIOD, payload: string}
  | {type: ActionType.INPUT_CVC, payload: string};

export type AppDispatch = Dispatch<Action>;

const initalState: State = {
  cardNumber: '',
  name: '',
  expiredPeriod: '',
  cvc: '',
}

// context를 전역에 선언한다
export const AppStateContext = createContext<State>(initalState);
export const AppDispatchContext = createContext<AppDispatch>(() => null);

export function createAction<T>(type: ActionType, payload: T) {
  return {
    type, payload
  }
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.INPUT_CARDNUMBER:
      return {
        ...state,
        cardNumber: action.payload
      };
    case ActionType.INPUT_NAME:
      return {
        ...state,
        name: action.payload
      }
    case ActionType.INPUT_EXPIRED_PERIOD:
      return {
        ...state,
        expiredPeriod: action.payload
      }
    case ActionType.INPUT_CVC:
      return {
        ...state,
        cvc: action.payload
      }
  }  
}

function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <>  
      <AppStateContext.Provider value={state}>
        <AppDispatchContext.Provider value={dispatch}>
          { children }
        </AppDispatchContext.Provider>
      </AppStateContext.Provider>
    </>
  );
}

export default AppProvider;