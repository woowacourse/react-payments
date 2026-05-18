import { useEffect, useState } from "react";
import { fetchCardList } from "../api/cardList";
import { deleteCard } from "../api/card";
import { useAsyncState } from "../../../shared/hooks/useAsyncState";
import type { CardItemInformationType } from "../types/cardItem";

export const useCardList = () => {
  const { asyncState, setLoading, setSuccess, setError } = useAsyncState();

  const [cardList, setCardList] = useState<CardItemInformationType[]>([]);

  const deleteCardFromState = (cardId: string) => {
    const newCardList = cardList.filter((card) => card.id !== cardId);
    setCardList(newCardList);
  };

  const deleteCardById = async (
    cardId: string,
    onSuccess: () => void,
    onError: (error: Error) => void,
  ) => {
    try {
      await deleteCard(cardId);
      onSuccess();
      deleteCardFromState(cardId);
    } catch (error) {
      onError(error as Error);
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

    loadCardList,
  };
};
