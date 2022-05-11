import { CARD_INFO_RULES } from "../constants/constants";

export const isInValidCardNumber = (value) => !/^\d{0,4}$/.test(value);

export const isInValidExpireDate = (value) => !/^\d{0,2}$/.test(value);

export const isInValidHolderName = (value) => !/(^[a-z]{0,30}$)/i.test(value);

export const isInvalidSecurityCode = (value) => !/^\d{0,3}$/.test(value);

export const isInvalidPassword = (value) => !/^\d{0,1}$/.test(value);

export const isInvalidCardAlias = (value) => !/^.{0,15}$/.test(value);

export const isValidCardInfo = (
  cardNumber,
  expireDate,
  securityCode,
  password
) => {
  const {
    NUMBER_UNIT_COUNT,
    NUMBER_UNIT_LENGTH,
    EXPIRE_DATE_LENGTH,
    SECURITY_CODE_LENGTH,
    PASSWORD_LENGTH,
  } = CARD_INFO_RULES;

  const cardNumberLength = Object.values(cardNumber).reduce(
    (sum, currentValue) => currentValue.length + sum,
    0
  );

  const passwordLength = Object.values(password).reduce(
    (sum, currentValue) => currentValue.length + sum,
    0
  );

  const expireDateLength = Object.values(expireDate).reduce(
    (sum, currentValue) => currentValue.length + sum,
    0
  );

  return (
    cardNumberLength === NUMBER_UNIT_COUNT * NUMBER_UNIT_LENGTH &&
    expireDateLength === EXPIRE_DATE_LENGTH &&
    securityCode.value.length === SECURITY_CODE_LENGTH &&
    passwordLength === PASSWORD_LENGTH
  );
};

export const isCompleteExpireDate = (keyType, value) => {
  if (keyType === "month") return /(^0[1-9]$)|(^1[0-2]$)/.test(value);

  const currentYear = Number(new Date().getFullYear().toString().slice(2));
  const yearRegExp = new RegExp(
    `(${currentYear})|(${currentYear + 1})|(${currentYear + 2})|
      (${currentYear + 3})|(${currentYear + 4})|(${currentYear + 5})`
  );

  if (keyType === "year") return yearRegExp.test(value);

  if (keyType === "expireDate") {
    const [year, month] = value;

    return yearRegExp.test(year) && /(^0[1-9]$)|(^1[0-2]$)/.test(month);
  }
};
