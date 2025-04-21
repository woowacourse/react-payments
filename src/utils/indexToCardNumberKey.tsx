import { CARD_NUMBER_FIELDS } from "../types/cardKeyTypes";

export function indexToCardNumberKey(index: number) {
  return CARD_NUMBER_FIELDS[index];
}
