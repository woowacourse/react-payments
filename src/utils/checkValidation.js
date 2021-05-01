import { CARD_INFO, ERROR_TYPE, REG_EXP } from "./constants";
import throwError from "./throwError";

const validateCardNumbers = cardNumbers => {
  if (!Array.isArray(cardNumbers)) {
    throw new TypeError("cardNumbers should be an array");
  }

  return cardNumbers.every(number => REG_EXP.CARD_NUMBERS.test(number));
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

const validation = {
  [CARD_INFO.CARD_NUMBERS]: validateCardNumbers,
  [CARD_INFO.EXPIRATION_MONTH]: validateExpirationMonth,
  [CARD_INFO.EXPIRATION_YEAR]: validateExpirationYear,
};

const checkValidation = (name, value) => {
  try {
    if (!Object.values(CARD_INFO).includes(name)) {
      throw new TypeError("Invalid validation name");
    }
    console.log(value);
    const isValid = validation[name](value);

    if (!isValid) {
      throwError(name, ERROR_TYPE.VALIDATION);
    }
  } catch (error) {
    throw error;
  }
};

export default checkValidation;
