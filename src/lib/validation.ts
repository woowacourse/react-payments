import { CARD_VALID_PERIOD } from "constant";

import type {
  CardInfoValidationTarget,
  CardNumbers,
  ExpirationDate,
  Password,
} from "../types/cardInfo";

type Validator<T> = (value: T) => boolean;

type Validators = {
  [K in keyof CardInfoValidationTarget]: Validator<CardInfoValidationTarget[K]>;
};
interface Validate {
  test: Validator<any>;
  msg: string;
}

// 카드번호
const validateCardNumbers = (cardNumbers: CardNumbers) =>
  cardNumbers.every(cardNumber => cardNumber.length === 4);

const cardNumbersValidators: Validate[] = [
  { test: validateCardNumbers, msg: "카드번호를 4자씩 입력해주세요." },
];

// 만료일
const validateExpirationDateLength = (expirationDate: ExpirationDate) =>
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
const expirationDateValidators: Validate[] = [
  { test: validateExpirationDateLength, msg: "월, 년을 입력해주세요." },
  { test: validateMonth, msg: "월은 1 이상, 12 이하로 입력해주세요." },
  { test: validateDate, msg: "만료일은 현재일로부터 5년까지입니다." },
];

// CVC
const validateSecurityCode = (securityCode: string) => securityCode.length === 3;

const securityCodeValidators: Validate[] = [
  { test: validateSecurityCode, msg: "CVC 번호를 3자 입력해주세요." },
];

// 비밀번호
const validatePassword = (password: Password) => password.every(number => number.length === 1);

const passwordValidators: Validate[] = [
  { test: validatePassword, msg: "비밀번호를 입력해주세요." },
];

const validate = (validators: Validate[]) => value =>
  validators.every(({ test, msg }) => {
    if (test(value)) return true;
    throw new Error(msg);
  });

const cardInfoValidator: Validators = {
  cardNumbers: validate(cardNumbersValidators),
  expirationDate: validate(expirationDateValidators),
  securityCode: validate(securityCodeValidators),
  password: validate(passwordValidators),
};

export { cardInfoValidator, validateExpirationDateLength };

export type { Validators };
