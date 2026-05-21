import { useEffect, useState, useCallback, useEffectEvent, useRef } from 'react';

import { requestCards } from '../api/requestCards';
import { deleteCard } from '../api/deleteCard';
import type { CardResponse } from '../types/cardStausTypes';

export function useUserCardList() {
  const [cards, setCards] = useState<CardResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const abortRef = useRef<AbortController | null>(null);

  const loadCards = useCallback(() => {
    abortRef.current?.abort();

    const abortController = new AbortController();
    abortRef.current = abortController;

    requestCards(abortController.signal)
      .then((data) => {
        setCards(data);
        setErrorMessage('');
      })
      .catch((error) => {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }

        setErrorMessage('카드 목록을 불러올 수 없어요');
      })
      .finally(() => {
        if (!abortController.signal.aborted) {
          setIsLoading(false);
        }

        if (abortRef.current === abortController) {
          abortRef.current = null;
        }
      });
  }, []);

  const handleRetry = () => {
    setIsLoading(true);
    setErrorMessage('');

    loadCards();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('카드를 삭제하시겠습니까?')) {
      return;
    }

    try {
      await deleteCard(id);
      setCards((prev) => prev.filter((card) => card.id !== id));
    } catch (error) {
      alert(error instanceof Error ? error.message : '카드 삭제에 실패했습니다.');
    }
  };

  const loadCardsEvent = useEffectEvent(() => loadCards());

  useEffect(() => {
    loadCardsEvent();

    return () => {
      abortRef.current?.abort();
    };
  }, []);

  return {
    cards,
    isLoading,
    errorMessage,
    handleRetry,
    handleDelete,
  };
}
