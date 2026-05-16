import { useState, useEffect } from 'react';

import { getCards } from '@/services/apis/cards/cards';
import { mapCardsResponseDTOToModel } from '@/services/apis/cards/mapper';
import type { Card } from '@/pages/payments/cards/list/model';

export const useCards = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cards, setCards] = useState<Card[]>([]);
  const [error, setError] = useState<null | true>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    getCards()
      .then((cards) => {
        setCards(mapCardsResponseDTOToModel(cards));
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { cards, error, isLoading };
};
