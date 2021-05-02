import { CARD_INFO, ERROR_TYPE, LENGTH, REG_EXP } from "./constants";
import throwError from "./throwError";

const validateCardNumbers = cardNumbers => {
  if (!Array.isArray(cardNumbers)) {
    throw new TypeError("cardNumbers should be an array");
  }

  return cardNumbers.every(
    cardNumber => LENGTH.CARD_NUMBER.MIN <= cardNumber.length && cardNumber.length <= LENGTH.CARD_NUMBER.MAX
  );
};

const validateExpirationMonth = month => {
  if (typeof month !== "string") {
    throw new TypeError("month should be a string");
  }

  return 1 <= Number(month) && Number(month) <= 12;
};

const validateExpirationYear = year => {
  if (typeof year !== "string") {
    throw new TypeError("year should be a string");
  }

  const currentYear = new Date().getFullYear() - 2000;

  return Math.abs(Number(year) - currentYear) <= 5;
};

const validateOwnerName = name => {
  if (typeof name !== "string") {
    throw new TypeError("ownerName should be a string");
  }

  return REG_EXP.OWNER_NAME.test(name);
};

const validateSecurityCode = code => {
  if (typeof code !== "string") {
    throw new TypeError("securityCode should be a string");
  }

  return LENGTH.SECURITY_CODE.MIN <= code.length && code.length <= LENGTH.SECURITY_CODE.MAX;
};

const validateCardPasswords = cardPasswords => {
  if (!Array.isArray(cardPasswords)) {
    throw new TypeError("cardPasswords should be an array");
  }

  return cardPasswords.every(
    password => LENGTH.CARD_PASSWORDS.MIN <= password.length && password.length <= LENGTH.CARD_PASSWORDS.MAX
  );
};

const validation = {
  [CARD_INFO.CARD_NUMBERS]: validateCardNumbers,
  [CARD_INFO.EXPIRATION_MONTH]: validateExpirationMonth,
  [CARD_INFO.EXPIRATION_YEAR]: validateExpirationYear,
  [CARD_INFO.OWNER_NAME]: validateOwnerName,
  [CARD_INFO.SECURITY_CODE]: validateSecurityCode,
  [CARD_INFO.CARD_PASSWORDS]: validateCardPasswords,
};

const checkValidation = (inputName, value) => {
  try {
    if (!Object.values(CARD_INFO).includes(inputName)) {
      throw new TypeError("Invalid validation name");
    }

    const isValid = validation[inputName](value);

    if (!isValid) {
      throwError(inputName, ERROR_TYPE.VALIDATION);
    }
  } catch (error) {
    throw error;
  }
};

export default checkValidation;
