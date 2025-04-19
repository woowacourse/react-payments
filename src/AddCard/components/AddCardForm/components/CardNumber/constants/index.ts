import { CardNumberInputKey, CardNumberState } from "../types";

export const CARD_NUMBER_INPUT_KEYS: CardNumberInputKey[] = [
  "first",
  "second",
  "third",
  "fourth",
];

export const INITIAL_CARD_NUMBER_STATE: CardNumberState = {
  first: { value: "", errorMessage: "" },
  second: { value: "", errorMessage: "" },
  third: { value: "", errorMessage: "" },
  fourth: { value: "", errorMessage: "" },
} as const;

export const EXPIRE_DATE_ERROR_MESSAGE = {
  INVALID_NUMBER: "숫자만 입력 가능합니다.",
  INVALID_CARD_LENGTH: "4자리의 숫자만 입력 가능합니다.",
} as const;

export const CARD_NUMBER_LENGTH = 4;
