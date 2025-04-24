import { useEffect, useState } from "react";
import { CARD_NUMBERS_SEGMENT, CARD_TYPE } from "../constants/constants";
import { CardNumbersState, CardType } from "../types/types";
import { isCardNumberComplete } from "../utils/validations/card/cardNumber";

function identifyCardType(cardNumbers: CardNumbersState): CardType | null {
  if (!isCardNumberComplete(cardNumbers)) return null;

  const firstSegment = cardNumbers[CARD_NUMBERS_SEGMENT.first];

  if (firstSegment.startsWith("4")) return CARD_TYPE.visa;
  if (/^5[1-5]/.test(firstSegment)) return CARD_TYPE.master;
  return null;
}

export function useCardType(cardNumbers: CardNumbersState) {
  const [cardType, setCardType] = useState<CardType | null>(null);

  useEffect(() => {
    const identifiedCardType = identifyCardType(cardNumbers);
    setCardType(identifiedCardType);
  }, [cardNumbers]);

  return cardType;
}
