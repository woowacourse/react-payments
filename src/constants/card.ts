export const INITIAL_CARD_NUMBER_STATE = {
  first: { value: "", isError: false },
  second: { value: "", isError: false },
  third: { value: "", isError: false },
  fourth: { value: "", isError: false },
} as const;

export type CardNumberState = typeof INITIAL_CARD_NUMBER_STATE;
export type CardNumberInputKey = keyof typeof INITIAL_CARD_NUMBER_STATE;
