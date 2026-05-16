import { useState, useEffect } from 'react';

import { getCards } from '@/services/apis/cards/cards';
import { mapCardsResponseDTOToModel } from '@/services/apis/cards/mapper';
import type { Card } from '@/pages/payments/cards/list/model';

export const useCards = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    getCards().then((cards) => {
      setCards(mapCardsResponseDTOToModel(cards));
    });
  }, []);

  return { cards };
};
