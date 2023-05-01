import { useEffect, useState } from 'react';

import { CARDS_LOCAL_STORAGE_KEY } from '../constants';
import type { CardInfo } from '../types/card';

const useCards = () => {
  const [cards, setCards] = useState<CardInfo[]>(() => {
    const localStorageData = localStorage.getItem(CARDS_LOCAL_STORAGE_KEY);

    if (localStorageData === null) return [];

    return JSON.parse(localStorageData);
  });

  const registerCard = (card: CardInfo) => {
    setCards((prevCards) => [...prevCards, card]);
  };

  const modifyCardNickname = (id: string, nickname: string) => {
    setCards((prevCards) => {
      return prevCards.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            nickname,
          };
        }

        return card;
      });
    });
  };

  useEffect(() => {
    if (cards.length > 0) {
      localStorage.setItem(CARDS_LOCAL_STORAGE_KEY, JSON.stringify(cards));
    }
  }, [cards]);

  return { cards, registerCard, modifyCardNickname };
};

export default useCards;
