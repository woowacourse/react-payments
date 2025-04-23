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
