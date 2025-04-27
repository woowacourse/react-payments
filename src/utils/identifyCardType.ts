import { CARD_NUMBERS_SEGMENT, CARD_TYPE } from "../constants/card";
import { CardNumbersState, CardType } from "../types/card";
import { isCardNumberFilled } from "./validations/filledCheckers";

export const identifyCardType = (
  cardNumbers: CardNumbersState
): CardType | null => {
  if (!isCardNumberFilled(cardNumbers)) return null;

  const firstSegment = cardNumbers[CARD_NUMBERS_SEGMENT.first];

  if (firstSegment.startsWith("4")) return CARD_TYPE.visa;
  if (/^5[1-5]/.test(firstSegment)) return CARD_TYPE.master;
  return null;
};
