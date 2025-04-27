import { ERROR_MESSAGE } from "../constants/CardExpirationPeriodInputs.constant";
import { INITIALIZE_VALUE, NO_ERROR } from "../../../shared/constants/constant";
import {
  isValidLength,
  isValidNumber,
  isValidMonthRange,
  isValidYearRange,
} from "../../../shared/util/validation";

function getCommonValidationFns(length: number, date: string) {
  return [
    { condition: () => date === INITIALIZE_VALUE, errorMsg: NO_ERROR },
    {
      condition: () => !isValidLength(date, length),
      errorMsg: ERROR_MESSAGE.LENGTH,
    },
    {
      condition: () => !isValidNumber(date),
      errorMsg: ERROR_MESSAGE.NUMBER,
    },
  ];
}

export function getMonthValidationFns(length: number, date: string) {
  return [
    { condition: () => date === INITIALIZE_VALUE, errorMsg: NO_ERROR },
    {
      condition: () => !isValidMonthRange(date),
      errorMsg: ERROR_MESSAGE.MONTH_RANGE,
    },
    ...getCommonValidationFns(length, date),
  ];
}

export function getYearValidationFns(length: number, date: string) {
  return [
    { condition: () => date === INITIALIZE_VALUE, errorMsg: NO_ERROR },
    {
      condition: () => !isValidYearRange(date),
      errorMsg: ERROR_MESSAGE.YEAR_RANGE,
    },
    ...getCommonValidationFns(length, date),
  ];
}
