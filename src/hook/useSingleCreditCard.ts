import { useState } from "react";
import { CreditCard, getDefaultCreditCard } from "../type/CreditCard";

const useSingleCreditCard = (initialCard = getDefaultCreditCard()) => {
  const [card, setCard] = useState(initialCard);

  const setCardInfo = (newInfo: Partial<CreditCard>) => {
    setCard(Object.assign({ ...card }, newInfo));
  }

  return { card, setCardInfo };
};

export default useSingleCreditCard;
