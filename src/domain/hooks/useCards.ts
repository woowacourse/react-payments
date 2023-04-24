import { useEffect, useState } from 'react';

import { CARDS_LOCAL_STORAGE_KEY } from '../constants';
import type { CardInfo } from '../types/card';

const useCards = () => {
  const [cards, setCards] = useState<CardInfo[]>(() => {
    const localStorageData = localStorage.getItem(CARDS_LOCAL_STORAGE_KEY);

    if (localStorageData === null) return [];

    return JSON.parse(localStorageData);
  });

  useEffect(() => {
    if (cards.length > 0) {
      localStorage.setItem(CARDS_LOCAL_STORAGE_KEY, JSON.stringify(cards));
    }
  }, [cards]);

  const registerCard = (card: CardInfo) => {
    setCards((prevCards) => [...prevCards, card]);
  };

  return { cards, registerCard };
};

export default useCards;
