import ERROR_MESSAGE from "../constants/errorMessage";

export const validateCardNumber = (cardNumber: string) => {
  if (cardNumber.length === 0) return;

  if (Number.isNaN(Number(cardNumber))) {
    return ERROR_MESSAGE.NOT_A_NUMBER;
  }

  return "";
};

export const validateCardExpirationDateMM = (expirationDate: string) => {
  if (expirationDate.length === 0) return;

  if (Number.isNaN(Number(expirationDate))) {
    return ERROR_MESSAGE.NOT_A_NUMBER;
  }
  if (Number(expirationDate) < 1 || Number(expirationDate) > 12) {
    return ERROR_MESSAGE.INVALID_EXPIRATION_MONTH;
  }
  return "";
};

export const validateCardExpirationDateYY = (expirationDate: string) => {
  if (expirationDate.length === 0) return;

  if (Number.isNaN(Number(expirationDate))) {
    return ERROR_MESSAGE.NOT_A_NUMBER;
  }
  if (Number(expirationDate) < 25 || Number(expirationDate) > 99) {
    return ERROR_MESSAGE.INVALID_EXPIRATION_YEAR;
  }
  return "";
};

export const validateCardCVC = (cvc: string) => {
  if (cvc.length === 0) return;

  if (Number.isNaN(Number(cvc))) {
    return ERROR_MESSAGE.NOT_A_NUMBER;
  }
  return "";
};

export const validateCardPassword = (password: string) => {
  return password;
};
