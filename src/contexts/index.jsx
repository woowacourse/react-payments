import React, { useReducer } from 'react';
import { initialState, reducer } from '../store';

export const UserState = React.createContext(initialState);
export const UserDispatch = React.createContext(() => null);

export const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserState.Provider value={state}>
      <UserDispatch.Provider value={dispatch}>{children}</UserDispatch.Provider>
    </UserState.Provider>
  );
};
