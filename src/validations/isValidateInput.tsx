import { ERROR_MESSAGE } from '../constants/errorMessage';
import { VALIDATION } from '../constants/validation';
import { isRange } from '../util/isRange';

interface isValidateInputTableType {
  number: () => void;
  month: () => void;
  year: () => void;
  owner: () => void;
}

const isValidateInput = (value: string, section: 'number' | 'month' | 'year' | 'owner'): boolean => {
  const isValidateInputTable: isValidateInputTableType = {
    number: () => isCardNumberValidated(value),
    month: () => isCardMonthValidated(value),
    year: () => isCardYearValidated(value),
    owner: () => isCardOwnerValidated(value),
  };

  const validateFunction = isValidateInputTable[section];
  validateFunction();
};

function isCardNumberValidated(value: string) {
  const valueToNumber = Number(value);
  isNumber(valueToNumber);
  isNumberCount(value, VALIDATION.cardNumberCount);
}

function isCardMonthValidated(value: string) {
  const valueToNumber = Number(value);
  isNumber(valueToNumber);
  isInRange(valueToNumber, VALIDATION.cardMonthRange.min, VALIDATION.cardMonthRange.max);
}

function isCardYearValidated(value: string) {
  const valueToNumber = Number(value);
  const now = new Date();
  const year = now.getFullYear();
  const lastTwoDigits = year % 100;
  isNumber(valueToNumber);
  isInRange(valueToNumber, lastTwoDigits, lastTwoDigits + VALIDATION.maximumYearPeriod);
}

function isCardOwnerValidated(value: string) {
  isUpperCaseEnglish(value);
  isInRange(value.length, VALIDATION.cardOwnerLength.min, VALIDATION.cardOwnerLength.max);
}

function isNumber(value: number) {
  if (isNaN(value)) {
    throw new Error(ERROR_MESSAGE.notANumber);
  }
  return true;
}

function isInRange(value: number, min: number, max: number) {
  if (isRange(value, min, max)) {
    throw new Error(ERROR_MESSAGE.notInRange(min, max));
  }
  return true;
}

function isUpperCaseEnglish(value: string) {
  const regex = /^[A-Z]*$/;
  if (!regex.test(value)) {
    throw new Error(ERROR_MESSAGE.upperCase);
  }
  return true;
}

function isNumberCount(value: string, count: number) {
  const valueLength = value.length;
  if (valueLength !== count) {
    throw new Error(ERROR_MESSAGE.inputCount(count));
  }
  return true;
}

export default isValidateInput;
