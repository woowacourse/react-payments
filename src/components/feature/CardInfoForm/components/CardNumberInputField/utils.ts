import { checkIsGreaterThanZero, checkIsInt } from "@/utils/validator";

import type { InputStatus } from "./errorMessage";

//TODO: 계층화 생각하기 - 브랜드 판별 로직을 사용해도 될지 아니면 받아야 하는지

export const validateCardNumberUnitRange = (cardNumberUnit: number) => {
  return checkIsGreaterThanZero(cardNumberUnit);
};

export const checkCardNumberInputStatus = (
  input: string,
  maxLength: number,
): InputStatus => {
  if (input.length === 0) return "EMPTY";
  if (!checkIsInt(+input)) return "ONLY_NUMBER";
  if (!validateCardNumberUnitRange(+input)) return "RANGE_ERROR";
  if (input.length === maxLength) return "SUCCESS";

  return "DEFAULT";
};
