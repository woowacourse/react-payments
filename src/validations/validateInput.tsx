import { ERROR_MESSAGE } from '../constants/errorMessage';
import { VALIDATION } from '../constants/validation';
import { isRange } from '../util/isRange';

interface ValidateInputTableType {
  number: () => void;
  month: () => void;
  year: () => void;
  owner: () => void;
}

const validateInput = (value: string, section: 'number' | 'month' | 'year' | 'owner') => {
  const validateInputTable: ValidateInputTableType = {
    number: () => cardNumberValidated(value),
    month: () => cardMonthValidated(value),
    year: () => cardYearValidated(value),
    owner: () => cardOwnerValidated(value),
  };

  const validateFunction = validateInputTable[section];
  validateFunction();
};

function cardNumberValidated(value: string) {
  const valueToNumber = Number(value);
  isNumber(valueToNumber);
  isNumberCount(value, VALIDATION.cardNumberCount);
}

function cardMonthValidated(value: string) {
  const valueToNumber = Number(value);
  isNumber(valueToNumber);
  isInRange(valueToNumber, VALIDATION.cardMonthRange.min, VALIDATION.cardMonthRange.max);
}

function cardYearValidated(value: string) {
  const valueToNumber = Number(value);
  const now = new Date();
  const year = now.getFullYear();
  const lastTwoDigits = year % 100;
  isNumber(valueToNumber);
  isInRange(valueToNumber, lastTwoDigits, lastTwoDigits + VALIDATION.maximumYearPeriod);
}

function cardOwnerValidated(value: string) {
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

export default validateInput;
