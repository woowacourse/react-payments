import { INITIALIZE_VALUE, NO_ERROR } from "../../../shared/constants/values";
import { ERROR_MESSAGE } from "../constants/CardPasswordInputs.constant";
import { isValidLength, isValidNumber } from "../../../shared/util/validation";

export function getPasswordValidationFns(length: number, password: string) {
  return [
    { condition: () => password === INITIALIZE_VALUE, errorMsg: NO_ERROR },
    {
      condition: () => !isValidLength(password, length),
      errorMsg: ERROR_MESSAGE.LENGTH,
    },
    {
      condition: () => !isValidNumber(password),
      errorMsg: ERROR_MESSAGE.NUMBER,
    },
  ];
}
