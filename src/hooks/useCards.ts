import { useCallback, useEffect, useState } from 'react';

import type { CardData } from '../types/card';

const STORAGE_ID = 'payments-cards';

const useCards = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  const registerCard = useCallback((card: CardData) => {
    setCards((prev) => [card, ...prev]);
  }, []);

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

  return { cards, registerCard };
};

export default useCards;
