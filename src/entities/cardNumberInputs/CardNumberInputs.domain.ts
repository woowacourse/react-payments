import { CardNumberPosition } from "./../../types/index.types";
import { NO_ERROR } from "../../shared/constants/constant";
import { ERROR_MESSAGE } from "./CardNumberInputs.constant";
import { isValidLength, isValidNumber } from "../../util/validation";

export function getCardNumberValidationFns(length: number, cardNumber: string) {
  return [
    { condition: () => cardNumber === NO_ERROR, errorMsg: NO_ERROR },
    {
      condition: () => !isValidLength(cardNumber, length),
      errorMsg: ERROR_MESSAGE.LENGTH,
    },
    {
      condition: () => !isValidNumber(cardNumber),
      errorMsg: ERROR_MESSAGE.NUMBER,
    },
    { condition: () => true, errorMsg: NO_ERROR },
  ];
}

export function getErrorMessage(error: Record<CardNumberPosition, string>) {
  for (const key in error) {
    const typedKey = key as keyof typeof error;
    if (error[typedKey] !== NO_ERROR) {
      return error[typedKey];
    }
  }
}
