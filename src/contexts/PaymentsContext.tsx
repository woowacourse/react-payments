import { PropsWithChildren, useEffect } from 'react';
import { createContext, useState } from 'react';
import { Card } from '../types';
import { getLocalStorage, saveToLocalStorage } from '../utils/localStorage';

interface PaymentsContextValue {
  cardList: Card[];
  addCard: (cardInformation: Card) => void;
}

export const PaymentsContext = createContext<PaymentsContextValue>({
  cardList: [],
  addCard: (cardInformation: Card) => {},
});

export const PaymentsProvider = ({ children }: PropsWithChildren) => {
  const [cardList, setCardList] = useState<Card[]>(getLocalStorage() ?? []);

  useEffect(() => {
    saveToLocalStorage(cardList);
  }, [cardList]);

  const addCard = (cardInformation: Card) => {
    setCardList((cardList) => {
      return [...cardList, cardInformation];
    });
  };

  return (
    <PaymentsContext.Provider value={{ cardList, addCard }}>{children}</PaymentsContext.Provider>
  );
};
