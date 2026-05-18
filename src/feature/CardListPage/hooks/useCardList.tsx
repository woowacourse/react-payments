import { useEffect, useState } from "react";
import type { CardItemInformation } from "../components/Success/CardItem/CardItem";
import { fetchCardList } from "../api/cardList";
import { useAsyncState } from "./useAsyncState";

export const useCardList = () => {
  const { asyncState, setLoading, setSuccess, setError } = useAsyncState();

  const [cardList, setCardList] = useState<CardItemInformation[]>([]);

  const deleteCardFromState = (cardId: string) => {
    const newCardList = cardList.filter((card) => card.id !== cardId);
    setCardList(newCardList);
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

  return { asyncState, cardList, deleteCardFromState, loadCardList };
};
