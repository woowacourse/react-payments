import React, { Dispatch, PropsWithChildren, useContext, useReducer } from 'react';
import { createContext } from 'react';
import { CardRegisterAction } from '../reducer/cardRegister/cardRegisterAction';
import { cardRegisterReducer, initialCardRegisterInfo } from '../reducer/cardRegister/cardRegisterReducer';
import { CardRegisterInfo } from '../types/card.type';

export const CardRegisterContext = createContext<{
  cardRegisterInfo: CardRegisterInfo;
  dispatch: Dispatch<CardRegisterAction>;
}>({
  cardRegisterInfo: initialCardRegisterInfo,
  dispatch() {},
});

export const useCardRegisterContext = () => useContext(CardRegisterContext);

export default function CardRegisterProvider({ children }: PropsWithChildren) {
  const [cardRegisterInfo, dispatch] = useReducer(cardRegisterReducer, initialCardRegisterInfo);

  return (
    <CardRegisterContext.Provider value={{ cardRegisterInfo, dispatch }}>
      {children}
    </CardRegisterContext.Provider>
  );
}
