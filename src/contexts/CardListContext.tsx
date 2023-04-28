import { PropsWithChildren, createContext, useContext } from 'react';
import { Card } from '../types';
import { useCard } from '../hooks/cards/useCardList';

interface CardListContextValue {
  cardList: Card[];
  newCardId: number;
  newCard: Card | undefined;
  cardListLength: number;
  addCard: (cardInformation: Card) => void;
  updateCardName: (id: number, cardName: string) => void;
}

export const CardListContext = createContext<CardListContextValue>({
  cardList: [],
  newCardId: 1,
  newCard: undefined,
  cardListLength: 0,
  addCard: () => {},
  updateCardName: () => {},
});

export const CardListProvider = ({ children }: PropsWithChildren) => {
  const { cardList, newCardId, newCard, cardListLength, addCard, updateCardName } = useCard();

  return (
    <CardListContext.Provider
      value={{ cardList, newCardId, newCard, cardListLength, addCard, updateCardName }}
    >
      {children}
    </CardListContext.Provider>
  );
};

export const useCardListContext = () => {
  const context = useContext(CardListContext);

  if (context === undefined) {
    throw new Error('useCardListContext needs to be used inside the CardListProvider');
  }

  return context;
};
