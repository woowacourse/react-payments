import { useState, useEffect } from 'react';

import { getCards } from '@/services/apis/cards/cards';
import { mapCardsResponseDTOToModel } from '@/services/apis/cards/mapper';

export const useCards = () => {
  const [cards, setCards] = useState<any>([]);

  useEffect(() => {
    getCards().then((cards) => {
      setCards(mapCardsResponseDTOToModel(cards));
    });
  }, []);

  return { cards };
};
