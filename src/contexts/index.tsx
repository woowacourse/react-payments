import React, { useReducer } from 'react';
import { initialState, reducer } from '../store';

interface CardProviderProps {
  children: React.ReactNode;
}

export const UserContext = React.createContext<{ state: typeof initialState; dispatch: React.DispatchWithoutAction }>({
  state: initialState,
  dispatch: () => {},
});

export const CardProvider = ({ children }: CardProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = {
    state,
    dispatch,
  };
  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
