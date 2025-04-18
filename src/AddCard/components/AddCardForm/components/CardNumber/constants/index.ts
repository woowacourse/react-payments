import { CardNumberState } from "../types";

export const INITIAL_CARD_NUMBER_STATE: CardNumberState = {
  first: { value: "", isError: false },
  second: { value: "", isError: false },
  third: { value: "", isError: false },
  fourth: { value: "", isError: false },
} as const;

export const CARD_NUMBER_LENGTH = 4 as const;
