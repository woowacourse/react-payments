import { checkIsInt, validateCardNumberUnitRange } from "@/utils/validator";

import type { InputStatus } from "./errorMessage";

const CARD_NUMBER_UNIT_MAX_LENGTH = 4;

const checkCardNumberInputStatus = (input: string): InputStatus => {
  if (input.length === 0) return "EMPTY";
  if (!checkIsInt(+input)) return "ONLY_NUMBER";
  if (!validateCardNumberUnitRange(+input)) return "RANGE_ERROR";
  if (input.length < CARD_NUMBER_UNIT_MAX_LENGTH) return "INVALID_LENGTH";
  return "DEFAULT";
};

export default checkCardNumberInputStatus;
