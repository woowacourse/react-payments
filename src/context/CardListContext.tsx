import React from 'react';
import useCardList from '../hooks/useCardList';
import Storage from '../Storage';
import { Card } from '../type';

interface CardListContextInterface {
  cardList: Card[];
  addNewCard: (newCard: Card) => number;
  updateNickNameById: (id: number, nickName: string) => void;
}

export const CardListContext = React.createContext<CardListContextInterface | null>(null);

export function CardListProvider({ children }) {
  const { state: cardList, addNewCard, updateNickNameById } = useCardList(Storage.cardList, Storage.saveCardList);

  return (
    <CardListContext.Provider
      value={{
        cardList,
        addNewCard,
        updateNickNameById,
      }}>
      {children}
    </CardListContext.Provider>
  );
}
