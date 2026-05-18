import { useEffect, useState } from "react";
import { fetchCardList } from "../api/cardList";
import { deleteCard } from "../api/card";
import { useAsyncState } from "../../../shared/hooks/useAsyncState";
import type { CardItemInformationType } from "../types/cardItem";

export const useCardList = () => {
  const { asyncState, setLoading, setSuccess, setError } = useAsyncState();

  const [cardList, setCardList] = useState<CardItemInformationType[]>([]);
  const [deleteError, setDeleteError] = useState<Error | null>(null);

  const deleteCardFromState = (cardId: string) => {
    const newCardList = cardList.filter((card) => card.id !== cardId);
    setCardList(newCardList);
  };

  const deleteCardById = async (cardId: string) => {
    try {
      await deleteCard(cardId);
      deleteCardFromState(cardId);
    } catch (error) {
      setDeleteError(error as Error);
    }
  };

  const loadCardList = async () => {
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
    asyncState,
    cardList,
    deleteCardById,
    deleteError,
    loadCardList,
  };
};
