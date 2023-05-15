import { useState } from "react";
import { CreditCard } from "../type";

export const useCardList = () => {
  const [cardList, setCardList] = useState<CreditCard[]>([]);

  const addNewCard = (card: CreditCard) => {
    setCardList([...cardList, card]);
  };

  const setNickNewCard = (card: CreditCard) => {
    setCardList([...cardList.slice(0, cardList.length - 1), card]);
  };

  return { cardList, addNewCard, setNickNewCard };
};
