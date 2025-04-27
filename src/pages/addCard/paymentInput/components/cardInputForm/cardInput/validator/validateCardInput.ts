import { validatorUtils } from "../../../../../../../utils/validationUtils";

export function validateExpirationDateMonth(month: string, year: string) {
  const errorResult = {
    IS_NUMBER: validatorUtils.isNumber(month),
    IS_NUMBER_RANGE: validatorUtils.isValidNumberRange(Number(month), 1, 12),
    IS_EXPIRATION: validatorUtils.isValidExpirationDate(month, year),
  };
  return errorResult;
}

export function validateExpirationDateYear(month: string, year: string) {
  const errorResult = {
    IS_NUMBER: validatorUtils.isNumber(year),
    IS_EXPIRATION: validatorUtils.isValidExpirationDate(month, year),
  };
  return errorResult;
}

export function validateCVC(cvc: string) {
  return { IS_NUMBER_STRING: validatorUtils.isNumber(cvc) };
}

export function validateNumberString(cardNumber: string) {
  return { IS_NUMBER_STRING: validatorUtils.isNumber(cardNumber) };
}
