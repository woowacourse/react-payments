import { useEffect, useState } from 'react';
import type { Card } from '../types/card';
import type { AsyncState } from '../types/asyncState';
import { deleteCard, getCards } from '../api/cardsAPI';

export function useCardList() {
  const [cardListState, setCardListState] = useState<AsyncState<Card[]>>({ status: 'idle' });

  const fetchCards = async () => {
    try {
      setCardListState({ status: 'loading' });
      const responseData = await getCards();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setCardListState({ status: 'success', responseData: responseData });
    } catch (err) {
      if (err instanceof Error) {
        setCardListState({ status: 'error', message: err.message });
      }
    }
  };

  useEffect(() => {
    const loadCards = async () => {
      await fetchCards();
    };
    loadCards();
  }, []);

  const handleDelete = async (id: string): Promise<void> => {
    if (!window.confirm('삭제하시겠습니까?')) return;
    await deleteCard(id);
    await fetchCards();
  };

  return {
    cardListState,
    fetchCards,
    handleDelete,
  };
}
