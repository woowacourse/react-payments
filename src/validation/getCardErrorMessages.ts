import ERROR_MESSAGE from '../constants/errorMessage';
import {
  isNumber,
  isValidMonthRange,
  isValidYearRange,
  isValidLengthYear,
  isValidFormatMonth,
} from './validateConditions';

export const getCardNumberErrorMessage = (cardNumber: string) => {
  if (cardNumber.length === 0) return;
  if (isNumber(cardNumber)) {
    return ERROR_MESSAGE.NOT_A_NUMBER;
  }

  return '';
};

export const getCardExpirationMMErrorMessage = (expirationDate: string) => {
  if (expirationDate.length === 0) return;
  if (expirationDate === '0') return;

  if (!isValidFormatMonth(expirationDate)) {
    return ERROR_MESSAGE.INVALID_EXPIRATION_FORMAT;
  }
  if (isNumber(expirationDate)) {
    return ERROR_MESSAGE.NOT_A_NUMBER;
  }
  if (!isValidMonthRange(expirationDate)) {
    return ERROR_MESSAGE.INVALID_EXPIRATION_MONTH;
  }

  return '';
};

export const getCardExpirationYYErrorMessage = (expirationDate: string) => {
  if (expirationDate.length === 0) return;
  if (!isValidLengthYear(expirationDate)) return;

  if (isNumber(expirationDate)) {
    return ERROR_MESSAGE.NOT_A_NUMBER;
  }
  if (!isValidYearRange(expirationDate)) {
    return ERROR_MESSAGE.INVALID_EXPIRATION_YEAR;
  }

  return '';
};

export const getCardCVCErrorMessage = (cvc: string) => {
  if (cvc.length === 0) return;
  if (isNumber(cvc)) {
    return ERROR_MESSAGE.NOT_A_NUMBER;
  }

  return '';
};

export const getCardPasswordErrorMessage = (password: string) => {
  if (password.length === 0) return;
  if (isNumber(password)) {
    return ERROR_MESSAGE.NOT_A_NUMBER;
  }

  return '';
};
