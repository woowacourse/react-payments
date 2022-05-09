import React, { createContext, useState, useContext, useMemo } from 'react';
import { Card } from '../../types';

const initalCard: Card = {
  cardNumber: '',
  expiredPeriod: '',
  ownerName: '',
  cvc: '',
  password: '',
};

export type State = {
  isEditingCVC: boolean;
  card: Card;
  updateIsEditingCVC: (newState: boolean) => void;
  updateCard: (card: Card) => void;
};

export const CardRegisterContext = createContext<State>({
  isEditingCVC: false,
  card: { ...initalCard },
  updateIsEditingCVC: () => undefined,
  updateCard: () => undefined,
});

export function CardRegisterProvider({ children }: { children: React.ReactNode }) {
  const [isEditingCVC, setIsEditingCVC] = useState<boolean>(false);
  const [card, setCard] = useState<Card>({ ...initalCard });
  const value = useMemo(
    () => ({
      isEditingCVC,
      card,
      updateIsEditingCVC: (newState: boolean) => setIsEditingCVC(newState),
      updateCard: (newCard: Card) => setCard(newCard),
    }),
    [isEditingCVC, card],
  );
  return <CardRegisterContext.Provider value={value}>{children}</CardRegisterContext.Provider>;
}

export function useCardRegisterContext(): State {
  const state = useContext(CardRegisterContext);
  return state;
}
