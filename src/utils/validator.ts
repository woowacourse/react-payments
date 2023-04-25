import { MultipleInputFieldCardInformation } from '../types';
import {
  CARD_NUMBER_INPUT_MAX_LENGTH,
  DATE_DIVIDER,
  MAX_VALID_EXPIRATION_YEAR,
  REGEX,
} from '../constants';

const validateNonEmptyInput = (input: string) => {
  return input !== '';
};

const validateCardNumber = (input: string) => {
  return input.length === CARD_NUMBER_INPUT_MAX_LENGTH;
};

const validateExpirationDate = (input: string) => {
  const [month, year] = input.split(DATE_DIVIDER).map(Number);

  if (month < 1 || month > 12) return false;
  if (!year || !REGEX.TWO_DIGIT.test(String(year))) return false;

  const date = new Date();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear() % 100;

  if (year < currentYear || year > currentYear + MAX_VALID_EXPIRATION_YEAR) return false;

  return year === currentYear ? month >= currentMonth : true;
};

const validateOwnerName = (input: string) => {
  return /^\s*[A-Za-z\s]*\s*$/.test(input);
};

const validateSecurityCode = (input: string) => {
  return input.length >= 3 && input.length <= 4;
};

const validatePassword = (passwordInputs: string[]) => {
  return passwordInputs.every((password) => password.length === 1);
};

const validator = {
  issuer: validateNonEmptyInput,
  cardNumber: validateCardNumber,
  expirationDate: validateExpirationDate,
  ownerName: validateOwnerName,
  securityCode: validateSecurityCode,
  password: validatePassword,
};

export default validator;

const validateMultipleInputField = (key: string): key is MultipleInputFieldCardInformation => {
  return ['password'].includes(key);
};

export { validateMultipleInputField, validateNonEmptyInput };
