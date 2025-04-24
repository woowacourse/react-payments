import { CardNumbersState } from "../../constants/constants";
import { isPositiveInteger } from "./common";

export const isCardNumberComplete = (
  cardNumbers: CardNumbersState
): boolean => {
  const CARD_SEGMENT_NUMBER_LENGTH = 4;

  return Object.values(cardNumbers).every(
    (segment: string) => segment.length === CARD_SEGMENT_NUMBER_LENGTH
  );
};

export const isErrorCardNumber = (value: string) => {
  if (!isPositiveInteger(value)) return "숫자만 입력 가능합니다";
  return null;
};
