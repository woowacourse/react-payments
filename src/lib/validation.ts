import { CardInfo, CardNumbers, ExpiredDate, Password } from "../types";

type Validator = (value) => boolean;

export type Validators = {
  [P in keyof CardInfo]: Validator;
};

const validateCardNumbers = (cardNumbers: CardNumbers) =>
  cardNumbers.every(cardNumber => cardNumber.length === 4);

export const validateExpiredDateLength = (expiredDate: ExpiredDate) =>
  Object.keys(expiredDate).every(key => expiredDate[key].length === 2);

const validateMonth = (expiredDate: ExpiredDate) =>
  Number(expiredDate.month) >= 1 && Number(expiredDate.month) <= 12;

const validateDate = ({ year, month }: ExpiredDate) => {
  const date = new Date();
  const currentYear = date.getFullYear() % 100;
  const currentMonth = date.getMonth() + 1;
  const targetYear = Number(year);
  const targetMonth = Number(month);

  const isValidYear = targetYear > currentYear && targetYear < currentYear + 5;
  const isUnderMinMonth = targetYear === currentYear && targetMonth < currentMonth;
  const isOverMaxMonth = targetYear === currentYear + 5 && targetMonth > currentMonth;

  return isValidYear && !isUnderMinMonth && isOverMaxMonth;
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
