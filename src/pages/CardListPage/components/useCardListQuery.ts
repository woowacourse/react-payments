import { useEffect, useState } from "react";
import { useAsyncState } from "../../../shared/hooks/useAsyncState";
import type { CardListResponseItem } from "../../../domain/card/api/cards.types";
import { fetchCardList } from "../../../domain/card/api/cards";

export const useCardListQuery = () => {
  const { asyncState, setLoading, setSuccess, setError } = useAsyncState();

  const [cardList, setCardList] = useState<CardListResponseItem[]>([]);

  const deleteCardFromState = (cardId: string) => {
    setCardList((prev) => prev.filter((card) => card.id !== cardId));
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
    loadCardList,
    deleteCardFromState,
  };
};
