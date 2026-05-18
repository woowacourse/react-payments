import { useEffect, useState } from "react";
import type { CardItemInformation } from "../components/Success/CardItem/CardItem";
import { fetchCardList } from "../api/cardList";

export const useCardList = () => {
  const [asyncState, setAsyncState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [cardList, setCardList] = useState<CardItemInformation[]>([]);

  const deleteCardFromState = (cardId: string) => {
    const newCardList = cardList.filter((card) => card.id !== cardId);
    setCardList(newCardList);
  };

  const loadCardList = async () => {
    // 이렇게 하니까 무슨 callback 쓰는 것처럼 쓰게 되는데, 이러면 useEffect를 쓰는 이유가...
    try {
      setAsyncState("loading");
      const fetchedCardList = await fetchCardList();
      setCardList(fetchedCardList);
      setAsyncState("success");
    } catch {
      setAsyncState("error");
    }
  };

  useEffect(() => {
    loadCardList();
  }, []);

  return { asyncState, cardList, deleteCardFromState, loadCardList };
};
