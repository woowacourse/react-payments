import { useState } from 'react';
import { Card } from '../type';

interface Returns {
  state: Card[];
  addNewCard: (newCard: Omit<Card, 'id'>) => number;
  updateNickNameById: (id: string, nickName: string) => void;
}

const useCardList = (initialCardList: Card[], saveCardListToStorage: (value: Card[]) => void): Returns => {
  const [state, setState] = useState(initialCardList);

  const addNewCard = (card: Omit<Card, 'id'>): number => {
    let newId: number;
    setState((prevCardList: Card[]) => {
      const newCardList: Card[] = [...prevCardList];
      const newCard: Card = { ...card, id: null };
      newId = newCardList[newCardList.length - 1]?.id + 1 || 1;
      newCard.id = newId;
      newCardList.push(newCard);

      saveCardListToStorage(newCardList);
      return newCardList;
    });
    return newId;
  };

  const updateNickNameById = (id: string, nickName: string) => {
    setState((prevCardList: Card[]) => {
      const cardIndex: number = prevCardList.findIndex(card => card.id === Number(id));
      const updatedCardInfo: Card = { ...prevCardList[cardIndex] };
      updatedCardInfo.nickName = nickName;

      const newCardList: Card[] = [...prevCardList];
      newCardList.splice(cardIndex, 1, updatedCardInfo);

      saveCardListToStorage(newCardList);
      return newCardList;
    });
  };

  return { state, addNewCard, updateNickNameById };
};

export default useCardList;
