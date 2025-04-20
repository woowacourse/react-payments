import { RefObject } from "react";
import { INITIAL_CARD_NUMBER_STATE } from "../constants";

export type CardNumberInputKey = keyof typeof INITIAL_CARD_NUMBER_STATE;
export type CardNumberState = Record<
  CardNumberInputKey,
  {
    value: string;
    isError: boolean;
  }
>;
export type CardNumberInputRefs = {
  [key in CardNumberInputKey]: RefObject<HTMLInputElement | null>;
};
