import { ValidatorType } from "./changeValidator";

const isVisa = (cardNumber?: string) => {
  const VISA_START_NUMBER = 4;
  return cardNumber && cardNumber.startsWith(String(VISA_START_NUMBER));
};

const isMaster = (cardNumber?: string) => {
  const MASTER_CARD_START_NUMBER_LIST = [51, 52, 53, 54];
  const MASTER_REG_PATTERN = new RegExp(`${MASTER_CARD_START_NUMBER_LIST.map(String).join("|")}`);
  return cardNumber && MASTER_REG_PATTERN.test(cardNumber);
};

const ERROR_MESSAGES = {
  NOT_VALID_CARD: "비자카드 혹은 마스터카드가 아닙니다. 다시 입력해주세요.",
  NOT_VALID_LENGTH: (number: number) => `${number}자를 입력해주세요.`,
  MUST_INPUT: "입력해주세요.",
};

export const cardNumberBlurValidator: ValidatorType = (input, name) => {
  const FIRST_NAME = "firstNumbers";
  if (name === FIRST_NAME && !isVisa(input) && !isMaster(input)) {
    return { isValid: false, message: ERROR_MESSAGES.NOT_VALID_CARD };
  }
  const EXPECTED_LENGTH = 4;
  if (input.length !== EXPECTED_LENGTH) {
    return { isValid: false, message: ERROR_MESSAGES.NOT_VALID_LENGTH(EXPECTED_LENGTH) };
  }

  return { isValid: true, value: input };
};

export const cardPeriodBlurValidator: ValidatorType = (input, name) => {
  if (name === "month" && input.length === 1) {
    return { isValid: true, value: input.padStart(2, "0") };
  }

  const EXPECTED_LENGTH = 2;
  if ((name === "month" && input.length === 0) || (name === "year" && input.length !== EXPECTED_LENGTH)) {
    return { isValid: false, message: ERROR_MESSAGES.NOT_VALID_LENGTH(EXPECTED_LENGTH) };
  }

  return { isValid: true, value: input };
};

export const cardPasswordBlurValidator: ValidatorType = (input) => {
  const EXPECTED_LENGTH = 2;
  if (input.length !== EXPECTED_LENGTH) {
    return { isValid: false, message: ERROR_MESSAGES.NOT_VALID_LENGTH(EXPECTED_LENGTH) };
  }

  return { isValid: true, value: input };
};

export const cardOwnerBlurValidator: ValidatorType = (input) => {
  const NOT_EXPECTED_LENGTH = 0;
  if (input.length === NOT_EXPECTED_LENGTH) {
    return { isValid: false, message: ERROR_MESSAGES.MUST_INPUT };
  }
  return { isValid: true, value: input };
};

export const cardCVCBlurValidator: ValidatorType = (input) => {
  const EXPECTED_LENGTH = 3;
  if (input.length !== EXPECTED_LENGTH) {
    return { isValid: false, message: ERROR_MESSAGES.NOT_VALID_LENGTH(EXPECTED_LENGTH) };
  }
  return { isValid: true, value: input };
};
