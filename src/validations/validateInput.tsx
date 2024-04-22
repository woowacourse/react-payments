import { ERROR_MESSAGE } from '../constants/errorMessage';
import { VALIDATION } from '../constants/validation';
import { InformationDetailType } from '../types/card';
import { isRange } from '../util/isRange';

interface ValidateResultType {
  isError: boolean;
  message: string;
}

interface ValidateInputTableType {
  number: () => ValidateResultType;
  month: () => ValidateResultType;
  year: () => ValidateResultType;
  owner: () => ValidateResultType;
}

const validateInput = (value: string, informationDetail: InformationDetailType) => {
  const validateInputTable: ValidateInputTableType = {
    number: () => cardNumberValidated(value),
    month: () => cardMonthValidated(value),
    year: () => cardYearValidated(value),
    owner: () => cardOwnerValidated(value),
  };

  const validateFunction = validateInputTable[informationDetail];
  return validateFunction();
};

function cardNumberValidated(value: string) {
  const valueToNumber = Number(value);
  if (!isNumber(valueToNumber)) return { isError: true, message: ERROR_MESSAGE.notANumber };
  if (!isNumberCount(value, VALIDATION.cardNumberCount))
    return { isError: true, message: ERROR_MESSAGE.inputCount(VALIDATION.cardNumberCount) };
  return { isError: false, message: '' };
}

function cardMonthValidated(value: string) {
  const valueToNumber = Number(value);
  if (!isNumber(valueToNumber)) return { isError: true, message: ERROR_MESSAGE.notANumber };
  if (!isInRange(valueToNumber, VALIDATION.cardMonthRange.min, VALIDATION.cardMonthRange.max))
    return {
      isError: true,
      message: ERROR_MESSAGE.notInRange(VALIDATION.cardMonthRange.min, VALIDATION.cardMonthRange.max),
    };
  return { isError: false, message: '' };
}

function cardYearValidated(value: string) {
  const valueToNumber = Number(value);
  const now = new Date();
  const year = now.getFullYear();
  const lastTwoDigits = year % 100;
  if (!isNumber(valueToNumber)) return { isError: true, message: ERROR_MESSAGE.notANumber };
  if (!isInRange(valueToNumber, lastTwoDigits, lastTwoDigits + VALIDATION.maximumYearPeriod))
    return {
      isError: true,
      message: ERROR_MESSAGE.notInRange(lastTwoDigits, lastTwoDigits + VALIDATION.maximumYearPeriod),
    };
  return { isError: false, message: '' };
}

function cardOwnerValidated(value: string) {
  if (!isUpperCaseEnglish(value)) return { isError: true, message: ERROR_MESSAGE.upperCase };
  if (!isInRange(value.length, VALIDATION.cardOwnerLength.min, VALIDATION.cardOwnerLength.max))
    return {
      isError: true,
      message: ERROR_MESSAGE.notInRange(VALIDATION.cardOwnerLength.min, VALIDATION.cardOwnerLength.max),
    };
  return { isError: false, message: '' };
}

function isNumber(value: number) {
  if (isNaN(value)) {
    return false;
  }
  return true;
}

function isInRange(value: number, min: number, max: number) {
  if (isRange(value, min, max)) {
    return false;
  }
  return true;
}

function isUpperCaseEnglish(value: string) {
  const regex = /^[A-Z]*$/;
  if (!regex.test(value)) {
    return false;
  }
  return true;
}

function isNumberCount(value: string, count: number) {
  const valueLength = value.length;
  if (valueLength !== count) {
    return false;
  }
  return true;
}

export default validateInput;
