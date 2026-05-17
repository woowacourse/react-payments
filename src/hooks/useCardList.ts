import { getCards, type CardListResponse } from "@/api/cards";
import { useState } from "react";

export type CardListStatus = "idle" | "loading" | "success" | "error";

const useCardList = () => {
  const [cards, setCards] = useState<CardListResponse>([]);
  const [status, setStatus] = useState<CardListStatus>("idle");

  const fetchCards = async () => {
    setStatus("loading");

    try {
      const cards = await getCards();

      setCards(cards);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return {
    cards,
    status,
    fetchCards,
  };
};

export default useCardList;
