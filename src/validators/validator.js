import { CARD_INFO_RULES } from "../constants/constants";

export const isInValidCardNumber = (value) => !/^\d{0,4}$/.test(value);

export const isInValidExpireDate = (value, name) => {
  if (name === "month") {
    return !/^$|0|(^[1-9]$)|(^1?[0-2]$)/.test(value);
  }

  return !/^\d{0,2}$/.test(value);
};

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
    (sum, currentInput) => currentInput.value.length + sum,
    0
  );

  const passwordLength = Object.values(password).reduce(
    (sum, currentInput) => currentInput.value.length + sum,
    0
  );

  const expireDateLength = Object.values(expireDate).reduce(
    (sum, currentInput) => currentInput.value.length + sum,
    0
  );

  return (
    cardNumberLength === NUMBER_UNIT_COUNT * NUMBER_UNIT_LENGTH &&
    expireDateLength === EXPIRE_DATE_LENGTH &&
    securityCode.value.length === SECURITY_CODE_LENGTH &&
    passwordLength === PASSWORD_LENGTH
  );
};
