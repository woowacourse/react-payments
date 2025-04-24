import { MAX_LENGTH } from "../../constants/constants";
import { CardNumbersState } from "../../types/types";
import { hasExactLength, isPositiveInteger } from "./common";

export const isCardNumberComplete = (
  cardNumbers: CardNumbersState
): boolean => {
  return Object.values(cardNumbers).every((segment: string) =>
    hasExactLength(segment, MAX_LENGTH.cardNumber)
  );
};

export const isErrorCardNumber = (value: string) => {
  if (!isPositiveInteger(value)) return "숫자만 입력 가능합니다";
  if (!hasExactLength(value, MAX_LENGTH.cardNumber))
    return "카드 번호를 모두 입력해 주세요";
  return null;
};
