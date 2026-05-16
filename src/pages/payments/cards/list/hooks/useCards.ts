import { useState, useEffect } from 'react';

import { getCards } from '@/services/apis/cards/cards';
import { mapCardsResponseDTOToModel } from '@/services/apis/cards/mapper';
import type { Card } from '@/pages/payments/cards/list/model';

export const useCards = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    setIsLoading(true);

    getCards().then((cards) => {
      setCards(mapCardsResponseDTOToModel(cards));
      setIsLoading(false);
    });
  }, []);

  return { cards, isLoading };
};
