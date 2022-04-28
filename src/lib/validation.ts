import { CardInfo, CardNumbers, ExpiredDate, Password } from "../types";

type Validator = (value) => boolean;

export type Validators = {
  [P in keyof CardInfo]: Validator;
};

const validateCardNumbers = (cardNumbers: CardNumbers) =>
  cardNumbers.every(cardNumber => cardNumber.length === 4);

const validateExpiredDateLength = (expiredDate: ExpiredDate) =>
  Object.keys(expiredDate).every(key => expiredDate[key].length === 2);

const validateMonth = (expiredDate: ExpiredDate) =>
  Number(expiredDate.month) >= 1 && Number(expiredDate.month) <= 12;

const validateDate = (expiredDate: ExpiredDate) => {
  const date = new Date();
  const year = date.getFullYear() % 100;
  const month = date.getMonth() + 1;

  if (Number(expiredDate.year) < year) return false;
  if (Number(expiredDate.year) > year + 5) return false;
  if (Number(expiredDate.year) === year && Number(expiredDate.month) < month) return false;
  if (Number(expiredDate.year) === year + 5 && Number(expiredDate.month) > month) return false;

  return true;
};

const expiredDateValidators = [validateExpiredDateLength, validateMonth, validateDate];

const validateExpiredDate = (expiredDate: ExpiredDate) =>
  expiredDateValidators.every(validator => validator(expiredDate));

const validateUserName = (userName: string) => userName.length > 0;

const validateSecurityCode = (securityCode: string) => securityCode.length === 3;

const validatePassword = (password: Password) => password.every(number => number.length === 1);

const cardInfoValidator = {
  cardNumbers: validateCardNumbers,
  expiredDate: validateExpiredDate,
  userName: validateUserName,
  securityCode: validateSecurityCode,
  password: validatePassword,
};

export default cardInfoValidator;
