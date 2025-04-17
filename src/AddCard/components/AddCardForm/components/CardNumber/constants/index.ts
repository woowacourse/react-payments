import { CardNumberInputKey } from "../types";

export const INITIAL_CARD_NUMBER_STATE = {
  first: { value: "", isError: false },
  second: { value: "", isError: false },
  third: { value: "", isError: false },
  fourth: { value: "", isError: false },
} as const;

export const CARD_NUMBER_INPUT_KEYS = Object.keys(
  INITIAL_CARD_NUMBER_STATE
) as CardNumberInputKey[];
