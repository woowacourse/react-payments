import { CardNumbersState } from "../../constants/constants";
import { isNotPositiveInteger } from "./common";

export const isCardNumberComplete = (
  cardNumbers: CardNumbersState
): boolean => {
  const CARD_SEGMENT_NUMBER_LENGTH = 4;

  return Object.values(cardNumbers).every(
    (segment: string) => segment.length === CARD_SEGMENT_NUMBER_LENGTH
  );
};

const cardNumberValidations = [
  {
    test: (value: string) => isNotPositiveInteger(value),
    message: "숫자만 입력 가능합니다",
  },
];

export const isErrorCardNumber = (value: string) => {
  for (const validation of cardNumberValidations) {
    if (validation.test(value)) return validation.message;
  }
  return null;
};
