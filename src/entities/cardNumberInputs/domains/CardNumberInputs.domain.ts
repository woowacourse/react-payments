import { INITIALIZE_VALUE, NO_ERROR } from "../../../shared/constants/constant";
import { ERROR_MESSAGE } from "../constants/CardNumberInputs.constant";
import { isValidLength, isValidNumber } from "../../../shared/util/validation";

export function getCardNumberValidationFns(length: number, cardNumber: string) {
  return [
    { condition: () => cardNumber === INITIALIZE_VALUE, errorMsg: NO_ERROR },
    {
      condition: () => !isValidLength(cardNumber, length),
      errorMsg: ERROR_MESSAGE.LENGTH,
    },
    {
      condition: () => !isValidNumber(cardNumber),
      errorMsg: ERROR_MESSAGE.NUMBER,
    },
  ];
}
