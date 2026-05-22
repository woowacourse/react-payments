import { deleteCard, getCards, type CardListResponse } from "@/api/cards";
import { useCallback, useState } from "react";

export type CardListStatus = "idle" | "loading" | "success" | "error";

export type CardListState =
  | { status: "loading" }
  | { status: "success"; data: CardListResponse }
  | { status: "error" };

const useCardList = () => {
  const [cardListState, setCardListState] = useState<CardListState>({
    status: "loading",
  });

  const fetchCards = useCallback(async () => {
    try {
      const cards = await getCards();

      setCardListState({ status: "success", data: cards });
    } catch {
      setCardListState({ status: "error" });
    }
  }, []);

  const removeCard = useCallback(
    async (cardId: string) => {
      await deleteCard(cardId);
      await fetchCards();
    },
    [fetchCards],
  );

  return {
    cardListState,
    fetchCards,
    removeCard,
  };
};

export default useCardList;
