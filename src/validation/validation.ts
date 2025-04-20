import ERROR_MESSAGE from '../constants/errorMessage';

export const validateCardNumber = (cardNumber: string): string | undefined => {
  if (cardNumber.length === 0) return;

  if (isNaN(Number(cardNumber))) {
    return ERROR_MESSAGE.NOT_A_NUMBER;
  }

  return undefined;
};

export const validateCardExpirationDateMM = (
  expirationDate: string,
): string | undefined => {
  if (expirationDate.length === 0) return;

  if (isNaN(Number(expirationDate))) {
    return ERROR_MESSAGE.NOT_A_NUMBER;
  }
  if (Number(expirationDate) < 1 || Number(expirationDate) > 12) {
    return ERROR_MESSAGE.INVALID_EXPIRATION_MONTH;
  }
  return undefined;
};

export const validateCardExpirationDateYY = (
  expirationDate: string,
): string | undefined => {
  if (expirationDate.length === 0) return;

  if (isNaN(Number(expirationDate))) {
    return ERROR_MESSAGE.NOT_A_NUMBER;
  }
  if (Number(expirationDate) < 25 || Number(expirationDate) > 99) {
    return ERROR_MESSAGE.INVALID_EXPIRATION_YEAR;
  }
  return undefined;
};

export const validateCardCVC = (cvc: string): string | undefined => {
  if (cvc.length === 0) return;

  if (isNaN(Number(cvc))) {
    return ERROR_MESSAGE.NOT_A_NUMBER;
  }
  return undefined;
};
