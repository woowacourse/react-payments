import { useState, useEffect } from 'react';

import { getCards } from '@/services/apis/cards/cards';
import { mapCardsResponseDTOToModel } from '@/services/apis/cards/mapper';
import type { Card } from '@/pages/payments/cards/list/model';

export const useCards = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cards, setCards] = useState<Card[]>([]);
  const [error, setError] = useState<null | true>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const cards = await getCards();
      setCards(mapCardsResponseDTOToModel(cards));
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { cards, error, isLoading };
};
