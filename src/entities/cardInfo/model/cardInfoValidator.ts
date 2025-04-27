import { isValidCardType } from './cardType';
import {
  CARD_INFO_VALID_RULE,
  CardInfoType,
} from '../../../entities/cardInfo/constants/cardInfoTypeConstants';
import { NO_ERROR, ERROR_MESSAGES } from '../constants/cardErrorConstants';

export interface InputValidationResultProps {
  [key: string]: [number, string];
}

export const cardNumberValidator = (inputs: string[]) => {
  const validations = [
    {
      check: (input: string) => !isNumeric(input),
      message: ERROR_MESSAGES.CARD_NUMBER.NOT_NUMERIC,
    },
    {
      check: (input: string) =>
        !isExactDigitLength(input, CARD_INFO_VALID_RULE[CardInfoType.NUMBER].MAX_LENGTH),
      message: ERROR_MESSAGES.CARD_NUMBER.NOT_FOUR_DIGIT,
    },
    {
      check: (input: string, index: number) => index === 0 && !isValidCardType(input),
      message: ERROR_MESSAGES.CARD_NUMBER.INVALID_TYPE,
    },
  ];

  const errorIndex = inputs.findIndex((input, index) =>
    validations.some((validation) => validation.check(input, index)),
  );

  if (errorIndex !== -1) {
    const input = inputs[errorIndex];
    const error = validations.find((validation) => validation.check(input, errorIndex));
    return [errorIndex, error?.message || ''];
  }
  return NO_ERROR;
};

export const cardExpirationDateValidator = (date: { month: string; year: string }) => {
  const validations = [
    {
      check: () => !isNumeric(date.month),
      index: 0,
      message: ERROR_MESSAGES.CARD_EXPIRATION_DATE.MONTH_NOT_NUMERIC,
    },
    {
      check: () => !isValidExpirationMonth(date.month),
      index: 0,
      message: ERROR_MESSAGES.CARD_EXPIRATION_DATE.MONTH_INVALID_RANGE,
    },
    {
      check: () =>
        !isExactDigitLength(date.month, CARD_INFO_VALID_RULE[CardInfoType.EXPDATE].MAX_LENGTH),
      index: 0,
      message: ERROR_MESSAGES.CARD_EXPIRATION_DATE.MONTH_NOT_TWO_DIGIT,
    },
    {
      check: () => !isNumeric(date.year),
      index: 1,
      message: ERROR_MESSAGES.CARD_EXPIRATION_DATE.YEAR_NOT_NUMERIC,
    },
    {
      check: () =>
        !isExactDigitLength(date.year, CARD_INFO_VALID_RULE[CardInfoType.EXPDATE].MAX_LENGTH),
      index: 1,
      message: ERROR_MESSAGES.CARD_EXPIRATION_DATE.YEAR_NOT_TWO_DIGIT,
    },
  ];

  const failedValidation = validations.find((validation) => validation.check());
  return failedValidation ? [failedValidation.index, failedValidation.message] : NO_ERROR;
};

export const cardCVCValidator = (input: string) => {
  const validations = [
    { check: () => !isNumeric(input), index: 0, message: ERROR_MESSAGES.CARD_CVC.NOT_NUMERIC },
    {
      check: () => !isExactDigitLength(input, CARD_INFO_VALID_RULE[CardInfoType.CVC].MAX_LENGTH),
      index: 0,
      message: ERROR_MESSAGES.CARD_CVC.NOT_THREE_DIGIT,
    },
  ];

  const failedValidation = validations.find((validation) => validation.check());
  return failedValidation ? [failedValidation.index, failedValidation.message] : NO_ERROR;
};

const isNumeric = (input: string) => {
  const numericRegex = /^\d+$/;
  return numericRegex.test(input);
};

const isExactDigitLength = (input: string, length: number) => {
  return input.length === length;
};

const isValidExpirationMonth = (month: string) => {
  const num = Number(month);
  return num >= 1 && num <= 12;
};
