import React, { useState } from 'react';
import Storage from '../Storage';

export const CardListContext = React.createContext({
  cardList: [],
  addNewCard: () => {},
  updateNickNameByIndex: () => {},
});

export function CardListProvider({ children }) {
  const [cardList, setCardInfoList] = useState(Storage.cardList);

  const addNewCard = newCardInfo => {
    let index;

    setCardInfoList(prevCardInfoList => {
      const newCardInfoList = prevCardInfoList.slice();
      newCardInfoList.push(newCardInfo);
      index = newCardInfoList.length - 1;

      Storage.saveCardList(newCardInfoList);
      return newCardInfoList;
    });
    return index;
  };

  const updateNickNameByIndex = (index, nickName) => {
    const updatedCardInfo = { ...cardList[index] };
    updatedCardInfo.nickName = nickName;

    setCardInfoList(prevCardInfoList => {
      const newCardInfoList = prevCardInfoList.slice();
      newCardInfoList.splice(index, 1, updatedCardInfo);

      Storage.saveCardList(newCardInfoList);
      return newCardInfoList;
    });
  };

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
