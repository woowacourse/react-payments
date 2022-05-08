import React, { createContext, Dispatch, useReducer } from 'react';
import ActionType from '../types';

export type State = {
  isEditingCVC: boolean;
};

type Action = { type: ActionType.UPDATE_EDITING_CVC; payload: any };

export type AppDispatch = Dispatch<Action>;

const initalState: State = {
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
