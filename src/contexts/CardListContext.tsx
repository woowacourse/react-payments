import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { Card, CardFormData } from '../types';
import { getLocalStorage, saveToLocalStorage } from '../utils/localStorage';

interface CardListContextValue {
  cardList: Card[];
  addCard: (cardInformation: Card) => void;
  updateCardName: (id: number, cardName: string) => void;
}

export const CardListContext = createContext<CardListContextValue>({
  cardList: [],
  addCard: (cardInformation: CardFormData) => {},
  updateCardName: (id: number, cardName: string) => {},
});

export const CardListProvider = ({ children }: PropsWithChildren) => {
  const [cardList, setCardList] = useState<Card[]>(getLocalStorage() ?? []);

  useEffect(() => {
    saveToLocalStorage(cardList);
  }, [cardList]);

  const addCard = (newCard: Card) => {
    setCardList((cardList) => {
      return [...cardList, newCard];
    });
  };

  const updateCardName = (id: number, cardName: string) => {
    setCardList((cardList) => {
      return cardList.map((card) => {
        if (card.id === id) card.cardName = cardName;

        return card;
      });
    });
  };

  return (
    <CardListContext.Provider value={{ cardList, addCard, updateCardName }}>
      {children}
    </CardListContext.Provider>
  );
};
