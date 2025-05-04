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
  month?: string,
): string | undefined => {
  if (expirationDate.length === 0) return;

  if (isNaN(Number(expirationDate))) {
    return ERROR_MESSAGE.NOT_A_NUMBER;
  }
  if (Number(expirationDate) < 25 || Number(expirationDate) > 99) {
    return ERROR_MESSAGE.INVALID_EXPIRATION_YEAR;
  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth() + 1;

  if (
    Number(expirationDate) < currentYear ||
    (Number(expirationDate) === currentYear &&
      month &&
      Number(month) < currentMonth)
  ) {
    return ERROR_MESSAGE.INVALID_EXPIRED_CARD;
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

export const validateCardSecretNumber = (
  secretNumber: string,
): string | undefined => {
  if (secretNumber.length === 0) return;

  if (isNaN(Number(secretNumber))) {
    return ERROR_MESSAGE.NOT_A_NUMBER;
  }
  return undefined;
};
