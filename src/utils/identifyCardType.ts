import { CARD_NUMBERS_SEGMENT, CARD_TYPE } from "../constants/constants";
import { CardNumbersState, CardType } from "../types/types";
import { isCardNumberFilled } from "./validations/card/cardNumber";

export const identifyCardType = (
  cardNumbers: CardNumbersState
): CardType | null => {
  if (!isCardNumberFilled(cardNumbers)) return null;

  const firstSegment = cardNumbers[CARD_NUMBERS_SEGMENT.first];

  if (firstSegment.startsWith("4")) return CARD_TYPE.visa;
  if (/^5[1-5]/.test(firstSegment)) return CARD_TYPE.master;
  return null;
};
