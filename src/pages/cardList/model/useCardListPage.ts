import { useCallback, useEffect, useState } from 'react';

import { deleteCard, getCards } from '@/entities/card/api/cards';
import type { Card } from '@/entities/card/model/card';
type CardListStatus = 'idle' | 'loading' | 'success' | 'error';

export const useCardList = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [status, setStatus] = useState<CardListStatus>('idle');

  const loadCards = useCallback(async () => {
    setStatus('loading');

    try {
      const data = await getCards();
      setCards(data);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void loadCards();
  }, [loadCards]);

  const removeCard = async (id: string) => {
    if (!window.confirm('카드를 삭제하시겠습니까?')) return;

    try {
      await deleteCard(id);
      await loadCards();
    } catch {
      setStatus('error');
    }
  };

  return {
    cards,
    status,
    refetch: loadCards,
    removeCard,
  };
};
