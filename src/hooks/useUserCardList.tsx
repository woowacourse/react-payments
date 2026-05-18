import { useEffect, useState } from 'react';

import { requestCards } from '../api/requestCards';
import type { CardResponse } from '../types/cardStausTypes';

export function useUserCardList() {
  const [cards, setCards] = useState<CardResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleRetry = async () => {
    try {
      setIsLoading(true);
      setErrorMessage('');

      const data = await requestCards();
      setCards(data);
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return;
      }

      setErrorMessage('카드 목록을 불러올 수 없어요');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();

    requestCards(abortController.signal)
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          return;
        }
        setErrorMessage('카드 목록을 불러올 수 없어요');
      })
      .finally(() => {
        if (!abortController.signal.aborted) {
          setIsLoading(false);
        }
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return {
    cards,
    isLoading,
    errorMessage,
    handleRetry,
  };
}
