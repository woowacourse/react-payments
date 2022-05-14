import React from 'react';
import useCardList from '../hooks/useCardList';
import Storage from '../Storage';

export const CardListContext = React.createContext({
  cardList: [],
  addNewCard: () => {},
  updateNickNameByIndex: () => {},
});

export function CardListProvider({ children }) {
  const [cardList, addNewCard, updateNickNameByIndex] = useCardList(Storage.cardList, Storage.saveCardList);

  return (
    <CardListContext.Provider
      value={{
        cardList,
        addNewCard,
        updateNickNameByIndex,
      }}>
      {children}
    </CardListContext.Provider>
  );
}
