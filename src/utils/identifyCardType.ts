import { CARD_NUMBERS_SEGMENT, CARD_TYPE } from "../constants/card";
import { CardNumberState, CardType } from "../types/card";
import { isCardNumberFilled } from "./validations/filledCheckers";

export const identifyCardType = (
  cardNumber: CardNumberState
): CardType | null => {
  if (!isCardNumberFilled(cardNumber)) return null;

  const firstSegment = cardNumber[CARD_NUMBERS_SEGMENT.first];

  if (firstSegment.startsWith("4")) return CARD_TYPE.visa;
  if (/^5[1-5]/.test(firstSegment)) return CARD_TYPE.master;
  return null;
};
