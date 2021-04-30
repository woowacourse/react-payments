import { CARD_INFO, ERROR_TYPE, REG_EXP } from "./constants";
import throwError from "./throwError";

const validateCardNumbers = cardNumbers => {
  if (!Array.isArray(cardNumbers)) {
    throw new TypeError("cardNumbers should be an array");
  }

  return cardNumbers.every(number => REG_EXP.CARD_NUMBERS.test(number));
};

const validation = {
  [CARD_INFO.CARD_NUMBERS]: validateCardNumbers,
};

const checkValidation = (name, value) => {
  try {
    if (!Object.values(CARD_INFO).includes(name)) {
      throw new TypeError("Invalid validation name");
    }

    const isValid = validation[name](value);

    if (!isValid) {
      throwError(name, ERROR_TYPE.VALIDATION);
    }
  } catch (error) {
    throw error;
  }
};

export default checkValidation;
