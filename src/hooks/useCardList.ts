import { useState } from 'react';
import { cardLocalStorage } from '../components/domain/CardLocalStorage';
import type { CardItemInfo } from './../types/Card';

const useCardList = () => {
  const [cardList, setCardList] = useState<CardItemInfo[]>(
    cardLocalStorage.getCardList() || []
  );

  const updateCardList = (cardItem: CardItemInfo) => {
    setCardList((prevCardList) => [cardItem, ...prevCardList]);
  };

  return { cardList, updateCardList };
};

export { useCardList };
