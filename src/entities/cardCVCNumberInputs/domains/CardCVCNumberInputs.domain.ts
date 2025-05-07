import { INITIALIZE_VALUE, NO_ERROR } from "../../../shared/constants/values";
import { ERROR_MESSAGE } from "../constants";
import { isValidLength, isValidNumber } from "../../../shared/util/validation";

export function getCVCValidationFns(length: number, CVCNumber: string) {
  return [
    { condition: () => CVCNumber === INITIALIZE_VALUE, errorMsg: NO_ERROR },
    {
      condition: () => !isValidLength(CVCNumber, length),
      errorMsg: ERROR_MESSAGE.LENGTH,
    },
    {
      condition: () => !isValidNumber(CVCNumber),
      errorMsg: ERROR_MESSAGE.NUMBER,
    },
  ];
}
