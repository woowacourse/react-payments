import { CARD_NUMBER_DIGITS, MAX_NAME_SIZE, PASSWORD_SIZE, SECURITY_CODE_SIZE } from './constants';
import { CardNumber, ExpirationDate, OwnerName, Password, SecurityCode } from './types';
import { hasValidLength, isEnglish, isNumeric, isValidDate } from './utils/validator';

export const isValidCardNumber = (cardNumber: CardNumber) => {
  const cardNumberText = cardNumber.join('');
  return isNumeric(cardNumberText) && hasValidLength(cardNumberText, CARD_NUMBER_DIGITS);
};

export const isValidExpirationDate = (expirationDate: ExpirationDate) => {
  return isValidDate(expirationDate.month, expirationDate.year);
};

export const isValidOwnerName = (ownerName: OwnerName) => isEnglish(ownerName, MAX_NAME_SIZE);

export const isValidSecurityCode = (securityCode: SecurityCode) => {
  return isNumeric(securityCode) && hasValidLength(securityCode, SECURITY_CODE_SIZE);
};

export const isValidPassword = (password: Password) => {
  const passwordText = password.join('');
  return isNumeric(passwordText) && hasValidLength(passwordText, PASSWORD_SIZE);
};
