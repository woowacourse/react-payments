import { deleteCard, getCards, type CardListResponse } from "@/api/cards";
import { useCallback, useState } from "react";

export type CardListStatus = "idle" | "loading" | "success" | "error";

const useCardList = () => {
  const [cards, setCards] = useState<CardListResponse>([]);
  const [status, setStatus] = useState<CardListStatus>("idle");

  const fetchCards = useCallback(async () => {
    setStatus("loading");

    try {
      const cards = await getCards();

      setCards(cards);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }, []);

  const removeCard = useCallback(async (cardId: string) => {
    await deleteCard(cardId);
    await fetchCards();
  }, [fetchCards]);

  return {
    cards,
    status,
    fetchCards,
    removeCard,
  };
};

export default useCardList;
