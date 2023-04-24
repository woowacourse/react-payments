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
    const newId = (cardList[cardList.length - 1].id ?? 0) + 1;
    const newCard = { ...cardInformation, id: newId, cardName: `카드 ${cardList.length + 1}` };

    setCardList((cardList) => {
      return [...cardList, newCard];
    });
  };

  return (
    <PaymentsContext.Provider value={{ cardList, addCard }}>{children}</PaymentsContext.Provider>
  );
};
