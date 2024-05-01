import { CARD_PROVIDER_SELECT } from '../constants/cardInformation';
import { ERROR_MESSAGE } from '../constants/errorMessage';
import { VALIDATION } from '../constants/validation';
import { InformationDetailType } from '../types/card';
import { isRange } from '../util/isRange';

interface ValidateResultType {
  isError: boolean;
  message: string;
}

interface IsInRangeType {
  value: number;
  min: number;
  max: number;
}

interface ValidateInputTableType {
  number: () => ValidateResultType;
  month: () => ValidateResultType;
  year: () => ValidateResultType;
  owner: () => ValidateResultType;
  provider: () => ValidateResultType;
  cvc: () => ValidateResultType;
  password: () => ValidateResultType;
}

const validateInput = (value: string, informationDetail: InformationDetailType) => {
  const validateInputTable: ValidateInputTableType = {
    number: () => cardNumberValidated(value),
    month: () => cardMonthValidated(value),
    year: () => cardYearValidated(value),
    owner: () => cardOwnerValidated(value),
    provider: () => cardProviderValidated(value),
    cvc: () => cardCvcValidated(value),
    password: () => cardPasswordValidated(value),
  };

  const validateFunction = validateInputTable[informationDetail];
  return validateFunction();
};

function cardNumberValidated(value: string) {
  if (!isNumber(value)) return { isError: true, message: ERROR_MESSAGE.notANumber };
  if (!isNumberCount(value, VALIDATION.cardNumberCount))
    return { isError: true, message: ERROR_MESSAGE.inputCount(VALIDATION.cardNumberCount) };
  return { isError: false, message: '' };
}

function cardMonthValidated(value: string) {
  if (!isNumber(value)) return { isError: true, message: ERROR_MESSAGE.notANumber };
  const valueToNumber = Number(value);
  if (!isInRange({ value: valueToNumber, min: VALIDATION.cardMonthRange.min, max: VALIDATION.cardMonthRange.max }))
    return {
      isError: true,
      message: ERROR_MESSAGE.notInRange(VALIDATION.cardMonthRange.min, VALIDATION.cardMonthRange.max),
    };
  return { isError: false, message: '' };
}

function cardYearValidated(value: string) {
  if (!isNumber(value)) return { isError: true, message: ERROR_MESSAGE.notANumber };

  const valueToNumber = Number(value);
  const now = new Date();
  const year = now.getFullYear();
  const lastTwoDigits = year % 100;
  if (!isInRange({ value: valueToNumber, min: lastTwoDigits, max: lastTwoDigits + VALIDATION.maximumYearPeriod }))
    return {
      isError: true,
      message: ERROR_MESSAGE.notInRange(lastTwoDigits, lastTwoDigits + VALIDATION.maximumYearPeriod),
    };
  return { isError: false, message: '' };
}

function cardOwnerValidated(value: string) {
  if (!isUpperCaseEnglish(value)) return { isError: true, message: ERROR_MESSAGE.upperCase };
  if (!isInRange({ value: value.length, min: VALIDATION.cardOwnerLength.min, max: VALIDATION.cardOwnerLength.max }))
    return {
      isError: true,
      message: ERROR_MESSAGE.notInRange(VALIDATION.cardOwnerLength.min, VALIDATION.cardOwnerLength.max),
    };
  return { isError: false, message: '' };
}

function cardProviderValidated(value: string) {
  if ((typeof CARD_PROVIDER_SELECT).includes(value)) {
    return {
      isError: true,
      message: ERROR_MESSAGE.invalidProvider,
    };
  }
  return { isError: false, message: '' };
}

function cardCvcValidated(value: string) {
  if (!isNumber(value)) return { isError: true, message: ERROR_MESSAGE.notANumber };
  if (!isNumberCount(value, VALIDATION.cvcNumberCount)) return { isError: true, message: ERROR_MESSAGE.invalidCvc };
  return { isError: false, message: '' };
}

function cardPasswordValidated(value: string) {
  if (!isNumber(value)) return { isError: true, message: ERROR_MESSAGE.notANumber };
  if (!isNumberCount(value, VALIDATION.passwordNumberCount))
    return { isError: true, message: ERROR_MESSAGE.inputCount(VALIDATION.passwordNumberCount) };
  return { isError: false, message: '' };
}

function isNumber(value: string) {
  const regex = VALIDATION.numberRegex;
  if (!regex.test(value)) {
    return false;
  }
  return true;
}

function isInRange({ value, min, max }: IsInRangeType) {
  if (isRange(value, min, max)) {
    return false;
  }
  return true;
}

function isUpperCaseEnglish(value: string) {
  const regex = VALIDATION.upperCaseRegex;
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
