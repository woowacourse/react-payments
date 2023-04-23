import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { Card, CardFormData } from '../types';
import { getLocalStorage, saveToLocalStorage } from '../utils/localStorage';

interface PaymentsContextValue {
  cardList: Card[];
  addCard: (cardInformation: CardFormData) => void;
}

export const PaymentsContext = createContext<PaymentsContextValue>({
  cardList: [],
  addCard: (cardInformation: CardFormData) => {},
});

export const PaymentsProvider = ({ children }: PropsWithChildren) => {
  const [cardList, setCardList] = useState<Card[]>(getLocalStorage() ?? []);

  useEffect(() => {
    saveToLocalStorage(cardList);
  }, [cardList]);

  const addCard = (cardInformation: CardFormData) => {
    // need to change id and cardName to unique values!
    const newCard = { ...cardInformation, id: '', cardName: '' };

    setCardList((cardList) => {
      return [...cardList, newCard];
    });
  };

  return (
    <PaymentsContext.Provider value={{ cardList, addCard }}>{children}</PaymentsContext.Provider>
  );
};
