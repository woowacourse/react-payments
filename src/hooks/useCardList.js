import { useState } from 'react';

const useCardList = (initialCardList, saveCardListToStorage) => {
  const [state, setState] = useState(initialCardList);

  const addNewCard = newCard => {
    let index;

    setState(prevCardList => {
      const newCardList = [...prevCardList];
      newCardList.push(newCard);
      index = newCardList.length - 1;

      saveCardListToStorage(newCardList);
      return newCardList;
    });
    return index;
  };

  const updateNickNameByIndex = (index, nickName) => {
    const updatedCardInfo = { ...state[index] };
    updatedCardInfo.nickName = nickName;

    setState(prevCardList => {
      const newCardList = [...prevCardList];
      newCardList.splice(index, 1, updatedCardInfo);

      saveCardListToStorage(newCardList);
      return newCardList;
    });
  };

  return [state, addNewCard, updateNickNameByIndex];
};

export default useCardList;
