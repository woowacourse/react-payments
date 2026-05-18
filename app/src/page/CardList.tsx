import type { AsyncState } from '../types/asyncState';
import { getCards } from '../api/cardsAPI';
import { useEffect, useState } from 'react';
import type { Card } from '../types/card';

export function CardList() {
  const [cardListState, setCardListState] = useState<AsyncState<Card[]>>({ status: 'idle' });

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setCardListState({ status: 'loading' });
        const responseData = await getCards();
        setCardListState({ status: 'success', responseData: responseData });
      } catch (err) {
        if (err instanceof Error) {
          setCardListState({ status: 'error', message: err.message });
        }
      }
    };

    fetchCards();
  }, []);

  if (cardListState.status === 'success') console.log(cardListState.responseData);
  return <div>안녕하세요</div>;
}
