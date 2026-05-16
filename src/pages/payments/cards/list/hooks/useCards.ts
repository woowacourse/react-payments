import { useState, useEffect } from 'react';

import { getCards } from '@/services/apis/cards/cards';

export const useCards = () => {
  const [cards, setCards] = useState<any>([]);

  useEffect(() => {
    getCards().then((cards) => {
      setCards(cards);
    });
  }, []);

  return { cards };
};
