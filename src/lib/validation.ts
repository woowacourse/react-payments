import { CardInfo, CardNumbers, ExpiredDate, Password } from "../types";

type Validator = (value) => boolean;

export type Validators = {
  [P in keyof CardInfo]: Validator;
};

const validateCardNumbers = (cardNumbers: CardNumbers) =>
  cardNumbers.every(cardNumber => cardNumber.length === 4);

const validateExpiredDate = (expiredDate: ExpiredDate) =>
  Object.keys(expiredDate).every(key => expiredDate[key].length === 2);

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
