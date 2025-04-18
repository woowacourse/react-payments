import { CardNumberInputKey } from "../types";

export const INITIAL_CARD_NUMBER_STATE = {
  first: { value: "", isError: false },
  second: { value: "", isError: false },
  third: { value: "", isError: false },
  fourth: { value: "", isError: false },
} as const;

function isExpireKey(k: string): k is CardNumberInputKey {
  return k in INITIAL_CARD_NUMBER_STATE;
}
export const CARD_NUMBER_INPUT_KEYS = Object.keys(
  INITIAL_CARD_NUMBER_STATE
).filter(isExpireKey);

export const CARD_NUMBER_LENGTH = 4 as const;
