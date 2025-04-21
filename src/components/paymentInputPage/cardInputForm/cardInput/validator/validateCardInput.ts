import { validatorUtils } from "../../../../../utils/validationUtils";

export function validateExpirationDateMonth(month: string, year: string) {
  return (
    validatorUtils.isValidNumberRange(Number(month), 1, 12) &&
    validatorUtils.isValidExpirationDate(month, year)
  );
}

export function validateExpirationDateYear(month: string, year: string) {
  return validatorUtils.isValidExpirationDate(month, year);
}

export function validateCVC(cvc: string) {
  return validatorUtils.isNumber(cvc);
}

export function validateisNumberString(cardNumber: string) {
  return validatorUtils.isNumber(cardNumber);
}
