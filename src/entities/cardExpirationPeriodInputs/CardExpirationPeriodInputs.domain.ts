import { ERROR_MESSAGE } from "./CardExpirationPeriodInputs.constant";
import { NO_ERROR } from "../../shared/constants/constant";
import {
  isValidLength,
  isValidNumber,
  isValidMonthRange,
  isValidYearRange,
} from "../../util/validation";
import { ExpirationPeriod } from "../../\btypes/index.types";

function getCommonValidationFns(length: number, date: string) {
  return [
    { condition: () => date === NO_ERROR, errorMsg: NO_ERROR },
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
    { condition: () => date === NO_ERROR, errorMsg: NO_ERROR },
    {
      condition: () => !isValidMonthRange(date),
      errorMsg: ERROR_MESSAGE.MONTH_RANGE,
    },
    ...getCommonValidationFns(length, date),
    ,
  ];
}

export function getYearValidationFns(length: number, date: string) {
  return [
    { condition: () => date === NO_ERROR, errorMsg: NO_ERROR },
    {
      condition: () => !isValidYearRange(date),
      errorMsg: ERROR_MESSAGE.YEAR_RANGE,
    },
    ...getCommonValidationFns(length, date),
  ];
}

export function getErrorMessage(error: Record<keyof ExpirationPeriod, string>) {
  for (const key in error) {
    const typedKey = key as keyof typeof error;
    if (error[typedKey] !== NO_ERROR) {
      return error[typedKey];
    }
  }
}
