import { useEffect, useState } from "react";
import {
  CARD_NUMBERS_SEGMENT,
  CARD_TYPE,
  CardNumbersState,
  CardType,
} from "../constants/constants";

function isCardNumberComplete(cardNumbers: CardNumbersState): boolean {
  const CARD_SEGMENT_NUMBER_LENGTH = 4;

  return Object.values(cardNumbers).every(
    (segment) => segment.length === CARD_SEGMENT_NUMBER_LENGTH
  );
}

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
