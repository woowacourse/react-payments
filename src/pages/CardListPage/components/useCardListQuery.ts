import { useEffect, useState } from "react";

import { useAsyncState } from "../../../shared/hooks/useAsyncState";
import type { CardListResponseItem } from "../../../domain/card/api/cards.types";
import {
  fetchCardList,
  requestDeleteCard,
} from "../../../domain/card/api/cards";

export const useCardList = () => {
  const fetchCardListAsyncState = useAsyncState();
  const deleteCardAsyncState = useAsyncState();

  const [cardList, setCardList] = useState<CardListResponseItem[]>([]);

  const deleteCardFromState = (cardId: string) => {
    setCardList((prev) => prev.filter((card) => card.id !== cardId));
  };

  const deleteCardById = async (
    cardId: string,
    options?: {
      onSuccess?: () => void;
      onError?: (error: Error) => void;
    },
  ) => {
    const { setLoading, setSuccess, setError } = deleteCardAsyncState;
    try {
      setLoading();
      await requestDeleteCard(cardId);
      setSuccess();
      deleteCardFromState(cardId);
      options?.onSuccess?.();
    } catch (error) {
      setError();
      if (error instanceof Error) {
        options?.onError?.(error);
      }
    }
  };

  const loadCardList = async () => {
    const { setLoading, setSuccess, setError } = fetchCardListAsyncState;
    try {
      setLoading();
      const fetchedCardList = await fetchCardList();
      setCardList(fetchedCardList);
      setSuccess();
    } catch {
      setError();
    }
  };

  useEffect(() => {
    loadCardList();
  }, []);

  return {
    fetchCardListAsyncState: fetchCardListAsyncState.asyncState,
    deleteCardAsyncState: deleteCardAsyncState.asyncState,
    cardList,
    deleteCardById,
    loadCardList,
  };
};
