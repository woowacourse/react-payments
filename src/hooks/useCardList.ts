import { deleteCard, getCards, type CardListResponse } from "@/api/cards";
import { useCallback, useState } from "react";

export type CardListStatus = "idle" | "loading" | "success" | "error";

export type CardListState =
  | { status: "loading" }
  | { status: "success"; data: CardListResponse }
  | { status: "error"; message: string };

const useCardList = () => {
  const [cardListState, setCardListState] = useState<CardListState>({
    status: "loading",
  });

  const fetchCards = useCallback(async () => {
    try {
      const cards = await getCards();

      setCardListState({ status: "success", data: cards });
    } catch {
      setCardListState({
        status: "error",
        message: "카드 목록을 불러올 수 없어요",
      });
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
