import { useEffect, useState } from 'react';

import type { CardData } from '../types/card';

const STORAGE_ID = 'payments-cards';

const useCards = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    const cardsData = localStorage.getItem(STORAGE_ID);

    if (cardsData === null) return;

    setCards(JSON.parse(cardsData));
  }, []);

  useEffect(() => {
    if (cards.length > 0) {
      localStorage.setItem(STORAGE_ID, JSON.stringify(cards));
    }
  }, [cards]);

  const registerCard = (card: CardData) => {
    setCards((prev) => [card, ...prev]);
  };

  return { cards, registerCard };
};

export default useCards;
