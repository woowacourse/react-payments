import { useEffect, useState } from "react";
import type { Card } from "../../types";
import { getLocalStorage, saveToLocalStorage } from "../../utils/localStorage";

const useCard = () => {
  const [cardList, setCardList] = useState<Card[]>(getLocalStorage() ?? []);

  const newCardId = (cardList.at(-1)?.id ?? 0) + 1;
  const newestCard = cardList.at(-1);
  const cardListLength = cardList.length;

  useEffect(() => {
    saveToLocalStorage(cardList);
  }, [cardList]);

  const addCard = (newCard: Card) => {
    setCardList((prevCardList) => [...prevCardList, newCard]);
  };

  const updateCardName = (id: number, cardName: string) => {
    setCardList((prevCardList) => {
      return prevCardList.map((card) => {
        if (card.id === id) card.cardName = cardName;

        return card;
      });
    });
  };

  return {
    cardList,
    newCardId,
    newestCard,
    cardListLength,
    addCard,
    updateCardName,
  };
};

export { useCard };
