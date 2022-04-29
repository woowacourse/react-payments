import { CARD_VALID_PERIOD } from "../constant";
import { CardInfo, CardNumbers, ExpirationDate, Password } from "../types";

type Validator<T> = (value: T) => boolean;

export type Validators = {
  [K in keyof CardInfo]: Validator<CardInfo[K]>;
};

const validateCardNumbers = (cardNumbers: CardNumbers) =>
  cardNumbers.every(cardNumber => cardNumber.length === 4);

export const validateExpirationDateLength = (expirationDate: ExpirationDate) =>
  Object.keys(expirationDate).every(key => expirationDate[key].length === 2);

const validateMonth = (expirationDate: ExpirationDate) =>
  Number(expirationDate.month) >= 1 && Number(expirationDate.month) <= 12;

const validateDate = (expirationDate: ExpirationDate) => {
  const date = new Date();
  const year = date.getFullYear() % 100;
  const month = date.getMonth() + 1;

  const expirationYear = Number(expirationDate.year);
  const expirationMonth = Number(expirationDate.month);

  if (expirationYear < year) return false;
  if (expirationYear > year + CARD_VALID_PERIOD) return false;
  if (expirationYear === year && expirationMonth < month) return false;
  if (expirationYear === year + CARD_VALID_PERIOD && expirationMonth > month) return false;

  return true;
};

const expirationDateValidators = [validateExpirationDateLength, validateMonth, validateDate];

const validateExpirationDate = (expirationDate: ExpirationDate) =>
  expirationDateValidators.every(validator => validator(expirationDate));

const validateUserName = (userName: string) => userName.length > 0;

const validateSecurityCode = (securityCode: string) => securityCode.length === 3;

const validatePassword = (password: Password) => password.every(number => number.length === 1);

const cardInfoValidator = {
  cardNumbers: validateCardNumbers,
  expirationDate: validateExpirationDate,
  userName: validateUserName,
  securityCode: validateSecurityCode,
  password: validatePassword,
};

export default cardInfoValidator;
