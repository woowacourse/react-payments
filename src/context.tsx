import React, { createContext, useState, useContext, useMemo } from 'react';
import { Card } from './card-list/types';

export type State = {
  cardList: Card[];
  addCard: (card: Card) => void;
};

export const PaymentContext = createContext<State>({
  cardList: [],
  addCard: () => undefined,
});

export function PaymentProvider({ children }: { children: React.ReactNode }) {
  const [cardList, setCardList] = useState<Array<Card>>([]);
  const value = useMemo(
    () => ({
      cardList,
      addCard: (newCard: Card) => setCardList([...structuredClone(cardList), newCard]),
    }),
    [cardList],
  );
  return <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>;
}

export function usePaymentContext(): State {
  const state = useContext(PaymentContext);
  return state;
}
