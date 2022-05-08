import React, { createContext, useState, useContext, useMemo } from 'react';
import { Card } from './shared/types';

const dummyCardList: Array<Card> = [
  {
    cardNumber: '1234123412341234',
    expiredPeriod: '1234',
    ownerName: 'THE OWNER',
    cvc: '312',
    password: '12',
    cardName: '아부라',
  },
  {
    cardNumber: '1234123412341234',
    expiredPeriod: '1234',
    ownerName: 'THE OWNER',
    cvc: '312',
    password: '12',
    cardName: '카타부라',
  },
  {
    cardNumber: '1234123412341234',
    expiredPeriod: '1234',
    ownerName: 'THE OWNER',
    cvc: '312',
    password: '12',
    cardName: '카타부라',
  },
  {
    cardNumber: '1234123412341234',
    expiredPeriod: '1234',
    ownerName: 'THE OWNER',
    cvc: '312',
    password: '12',
  },
  {
    cardNumber: '1234123412341234',
    expiredPeriod: '1234',
    ownerName: 'THE OWNER',
    cvc: '312',
    password: '12',
  },
  {
    cardNumber: '1234123412341234',
    expiredPeriod: '1234',
    ownerName: 'THE OWNER',
    cvc: '312',
    password: '12',
  },
];

export type State = {
  cardList: Card[];
  addCard: (card: Card) => void;
};

export const PaymentContext = createContext<State>({
  cardList: [],
  addCard: () => undefined,
});

export function PaymentProvider({ children }: { children: React.ReactNode }) {
  const [cardList, setCardList] = useState<Array<Card>>(dummyCardList);
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
