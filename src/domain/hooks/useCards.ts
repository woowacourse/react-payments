import { useEffect, useState } from 'react';

import { CARDS_LOCAL_STORAGE_KEY } from '../constants';
import type { CardInfo } from '../types/card';

const useCards = () => {
  const [cards, setCards] = useState<CardInfo[]>(() => {
    const localStorageData = localStorage.getItem(CARDS_LOCAL_STORAGE_KEY);

    if (localStorageData === null) return [];

    return JSON.parse(localStorageData);
  });
  const lastRegisteredCard = cards.at(-1) ?? null;

  const registerCard = (card: CardInfo) => {
    setCards((prevCards) => [...prevCards, card]);
  };

  const modifyLastCardNickname = (card: CardInfo, nickname: string) => {
    const cardsWithoutLast = cards.slice(0, -1);

    card['nickname'] = nickname;

    setCards(() => [...cardsWithoutLast, card]);
  };

  useEffect(() => {
    if (cards.length > 0) {
      localStorage.setItem(CARDS_LOCAL_STORAGE_KEY, JSON.stringify(cards));
    }
  }, [cards]);

  return { cards, registerCard, lastRegisteredCard, modifyLastCardNickname };
};

export default useCards;
