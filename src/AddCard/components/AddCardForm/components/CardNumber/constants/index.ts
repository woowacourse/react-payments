import { CardNumberInputKey, CardNumberState } from "../types";

export const CARD_NUMBER_INPUT_KEYS: CardNumberInputKey[] = [
  "first",
  "second",
  "third",
  "fourth",
];

export const INITIAL_CARD_NUMBER_STATE: CardNumberState = {
  first: { value: "", isError: false },
  second: { value: "", isError: false },
  third: { value: "", isError: false },
  fourth: { value: "", isError: false },
} as const;

export const CARD_NUMBER_LENGTH = 4 as const;
