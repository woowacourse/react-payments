import { PropsWithChildren, createContext } from 'react';
import { Card } from '../types';
import { useCard } from '../hooks/cards/useCardList';

interface CardListContextValue {
  cardList: Card[];
  newCardId: number;
  cardListLength: number;
  addCard: (cardInformation: Card) => void;
  updateCardName: (id: number, cardName: string) => void;
}

export const CardListContext = createContext<CardListContextValue>({
  cardList: [],
  newCardId: 1,
  cardListLength: 0,
  addCard: () => {},
  updateCardName: () => {},
});

export const CardListProvider = ({ children }: PropsWithChildren) => {
  const { cardList, newCardId, cardListLength, addCard, updateCardName } = useCard();

  return (
    <CardListContext.Provider
      value={{ cardList, newCardId, cardListLength, addCard, updateCardName }}
    >
      {children}
    </CardListContext.Provider>
  );
};
