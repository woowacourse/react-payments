import { CARD_INFO_RULES } from "../constants/constants";
import {
  ICardNumberState,
  IExpireDateState,
  IPasswordState,
  TPasswordLength,
  TExpireDateLength,
  TCardNumberLength,
} from "../types/cardInfoState";

export const isInValidCardNumber = (value: string): boolean =>
  !/^\d{0,4}$/.test(value);

export const isInValidExpireDate = (value: string): boolean =>
  !/^\d{0,2}$/.test(value);

export const isInValidHolderName = (value: string): boolean =>
  !/(^[a-z]{0,30}$)/i.test(value);

export const isInvalidSecurityCode = (value: string): boolean =>
  !/^\d{0,3}$/.test(value);

export const isInvalidPassword = (value: string): boolean =>
  !/^\d{0,1}$/.test(value);

export const isInvalidCardAlias = (value: string): boolean =>
  !/^.{0,15}$/.test(value);

export const isValidCardInfo = (
  cardNumber: ICardNumberState,
  expireDate: IExpireDateState,
  securityCode: string,
  password: IPasswordState
) => {
  const {
    NUMBER_UNIT_COUNT,
    NUMBER_UNIT_LENGTH,
    EXPIRE_DATE_LENGTH,
    SECURITY_CODE_LENGTH,
    PASSWORD_LENGTH,
  } = CARD_INFO_RULES;

  const cardNumberLength: TCardNumberLength = Object.values(cardNumber).reduce(
    (sum, currentValue) => currentValue.length + sum,
    0
  );

  const passwordLength: TPasswordLength = Object.values(password).reduce(
    (sum, currentValue) => currentValue.length + sum,
    0
  );

  const expireDateLength: TExpireDateLength = Object.values(expireDate).reduce(
    (sum, currentValue) => currentValue.length + sum,
    0
  );

  return (
    cardNumberLength === NUMBER_UNIT_COUNT * NUMBER_UNIT_LENGTH &&
    expireDateLength === EXPIRE_DATE_LENGTH &&
    securityCode.length === SECURITY_CODE_LENGTH &&
    passwordLength === PASSWORD_LENGTH
  );
};

export const isCompleteExpireMonth = (value: string): boolean => {
  return /(^0[1-9]$)|(^1[0-2]$)/.test(value);
};

export const isCompleteExpireYear = (value: string): boolean => {
  const currentYear = Number(new Date().getFullYear().toString().slice(2));
  const yearRegExp = new RegExp(
    `(${currentYear})|(${currentYear + 1})|(${currentYear + 2})|
      (${currentYear + 3})|(${currentYear + 4})|(${currentYear + 5})`
  );

  return yearRegExp.test(value);
};
