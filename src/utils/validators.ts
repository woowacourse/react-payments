import { CARD_INFO, OWNER_NAME_REG } from "../constants/cardInformation";
import { ERROR } from "../constants/message";

type validateReturnValue = { isError: boolean; message: string };
type validator = (value: string) => validateReturnValue;

export const executeValidators = (
  validators: validator[],
  value: string
): validateReturnValue => {
  const result = { isError: false, message: "" };

  validators.map((validator) => {
    const validatingResult = validator(value);

    if (validatingResult.isError === true) {
      result.isError = validatingResult.isError;
      result.message = validatingResult.message;
      return;
    }
  });
  return result;
};

export const isInvalidNumber = (value: string) => {
  if (value.length !== 0 && !Number.isInteger(Number(value))) {
    return { isError: true, message: ERROR.NOT_NUMBER };
  }

  return { isError: false, message: "" };
};

export const isInvalidCardNumberLength = (value: string) => {
  if (value.length !== CARD_INFO.NUMBER_LENGTH) {
    return { isError: true, message: ERROR.CARD_NUMBER_LENGTH };
  }
  return { isError: false, message: "" };
};

export const isInvalidDateLength = (value: string) => {
  if (value.length !== CARD_INFO.DATE_LENGTH) {
    return { isError: true, message: ERROR.CARD_DATE_LENGTH };
  }
  return { isError: false, message: "" };
};

export const isInvalidMonth = (value: string) => {
  if (
    Number(value) < CARD_INFO.MONTH_START ||
    Number(value) > CARD_INFO.MONTH_END
  ) {
    return { isError: true, message: ERROR.NOT_MONTH };
  }
  return { isError: false, message: "" };
};

export const isInvalidYear = (value: string) => {
  if (Number(value) < CARD_INFO.VALID_YEAR) {
    return { isError: true, message: ERROR.NOT_YEAR };
  }
  return { isError: false, message: "" };
};

export const isUpperCase = (name: string) => {
  const pattern: RegExp = OWNER_NAME_REG;

  if (name.length !== 0 && !pattern.test(name)) {
    return ERROR.NOT_ALPHABET;
  }
  return "";
};

export const isOwnerNameLength = (name: string) => {
  if (name.length < 1 && name.length > CARD_INFO.NAME_LENGTH) {
    return ERROR.CARD_NAME_LENGTH;
  }
  return "";
};
