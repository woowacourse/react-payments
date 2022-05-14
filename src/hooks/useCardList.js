import { useState } from 'react';

const useCardList = (initialCardList, saveCardListToStorage) => {
  const [state, setState] = useState(initialCardList);

  const addNewCard = newCard => {
    let newId;
    setState(prevCardList => {
      const newCardList = [...prevCardList];
      newId = newCardList[newCardList.length - 1]?.id + 1 || 1;
      newCard.id = newId;
      newCardList.push(newCard);

      saveCardListToStorage(newCardList);
      return newCardList;
    });
    return newId;
  };

  const updateNickNameById = (id, nickName) => {
    setState(prevCardList => {
      const cardIndex = prevCardList.findIndex(card => card.id === Number(id));
      const updatedCardInfo = { ...prevCardList[cardIndex] };
      updatedCardInfo.nickName = nickName;

      const newCardList = [...prevCardList];
      newCardList.splice(cardIndex, 1, updatedCardInfo);

      saveCardListToStorage(newCardList);
      return newCardList;
    });
  };

  return [state, addNewCard, updateNickNameById];
};

export default useCardList;
