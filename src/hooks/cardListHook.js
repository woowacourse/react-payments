import { useCallback } from "react";
import { isAllCardInputCorrect, isSameCardNumber } from "../utils/cardInputValidation";

const useCardList = (cardListState, setCardListState) => {
  const addCardItem = useCallback(
    (card) => {
      if (!isAllCardInputCorrect(card)) {
        return;
      }
      setCardListState([...cardListState, card]);
    },
    [cardListState, setCardListState]
  );

  const updateCardItem = useCallback(
    (targetCardNumber, updatedCard) => {
      const newCardListState = [...cardListState];

      const targetCardIndex = newCardListState.findIndex((cardItem) => {
        return isSameCardNumber(targetCardNumber, cardItem.cardNumber);
      });

      if (targetCardIndex === -1) {
        return;
      }

      newCardListState.splice(targetCardIndex, 1, updatedCard);
      setCardListState(newCardListState);
    },
    [cardListState, setCardListState]
  );

  return {
    addCardItem,
    updateCardItem,
  };
};

export default useCardList;
