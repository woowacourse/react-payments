import { NO_ERROR } from "../../shared/constants/constant";
import { ERROR_MESSAGE } from "./CardCVCNumberInputs.constant";
import { isValidLength, isValidNumber } from "../../util/validation";

export function getCVCValidationFns(length: number, CVCNumber: string) {
  return [
    { condition: () => CVCNumber === NO_ERROR, errorMsg: NO_ERROR },
    {
      condition: () => !isValidLength(CVCNumber, length),
      errorMsg: ERROR_MESSAGE.LENGTH,
    },
    {
      condition: () => !isValidNumber(CVCNumber),
      errorMsg: ERROR_MESSAGE.NUMBER,
    },
    { condition: () => true, errorMsg: NO_ERROR },
  ];
}

export function getErrorMessage(error: Record<"CVCNumber", string>) {
  for (const key in error) {
    const typedKey = key as keyof typeof error;
    if (error[typedKey] !== NO_ERROR) {
      return error[typedKey];
    }
  }
}
