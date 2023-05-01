import { createContext, useContext, useMemo } from 'react';
import type { PropsWithChildren } from 'react';
import type { Card } from '../types';
import { useCard } from '../hooks/cards/useCardList';

interface CardListContextValue {
  cardList: Card[];
  newCardId: number;
  cardListLength: number;
  addCard: (cardInformation: Card) => void;
  getCardById: (id: number) => Card | null;
  updateCardName: (id: number, cardName: string) => void;
}

export const CardListContext = createContext<CardListContextValue | null>(null);

export const CardListProvider = ({ children }: PropsWithChildren) => {
  const { cardList, newCardId, cardListLength, addCard, getCardById, updateCardName } = useCard();

  const contextValue = useMemo(
    () => ({ cardList, newCardId, cardListLength, addCard, getCardById, updateCardName }),
    [cardList, newCardId, cardListLength, addCard, getCardById, updateCardName]
  );

  return <CardListContext.Provider value={contextValue}>{children}</CardListContext.Provider>;
};

export const useCardListContext = () => {
  const context = useContext(CardListContext);

  if (context === null) {
    throw new Error('useCardListContext needs to be used inside the CardListProvider');
  }

  return context;
};
