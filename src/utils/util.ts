import type { DateError, MonthError, YearError } from '../types/errorTypes';

export function isMonthError(mode: DateError | MonthError | YearError | 'normal') {
  if (
    mode === 'emptyBoth' ||
    mode === 'emptyMonth' ||
    mode === 'notMonthRange' ||
    mode === 'notMonthNumber'
  ) {
    return true;
  }
  if (mode === 'normal' || mode === 'emptyYear' || mode === 'notYearNumber') {
    return false;
  }
}

export function isYearError(mode: DateError | MonthError | YearError | 'normal') {
  if (mode === 'emptyBoth' || mode === 'emptyYear' || mode === 'notYearNumber') {
    return true;
  }
  if (
    mode === 'normal' ||
    mode === 'emptyMonth' ||
    mode === 'notMonthRange' ||
    mode === 'notMonthNumber'
  ) {
    return false;
  }
}

export function isNotNumber<T extends string>(
  value: number,
  errorMode: T,
  setFunc: (mode: T) => void,
): boolean {
  if (isNaN(value)) {
    setFunc(errorMode);
    return true;
  }
  return false;
}

export function setEmptyBrand(value: string[], setCardBrand: (brand: string) => void) {
  if (value[0] === '') {
    setCardBrand('');
  }
}

export function setNoExist<T extends string>(
  value: string[],
  errorMode: T,
  setFunc: (mode: T) => void,
): boolean {
  if (value[0].slice(0, 1) !== '4' && value[0].slice(0, 1) !== '5') {
    setFunc(errorMode);
    return true;
  }
  if (value[0].length === 2) {
    if (Number(value[0].slice(0, 2)) < 51 || Number(value[0].slice(0, 2)) > 55) {
      setFunc(errorMode);
      return true;
    }
  }
  return false;
}
