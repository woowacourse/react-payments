import type { CardError, DateError, MonthError, YearError } from '../types/errorTypes';
import { isCardNumberComplete, isNumericInput, validateCardNumber } from './validate';

type CardNumberError = CardError | 'normal';
type ExpiryDateError = DateError | MonthError | YearError | 'normal';

export function getCardNumberError(cardNumber: string): CardNumberError {
  const cardNumberError = validateCardNumber(cardNumber);

  if (cardNumberError !== 'normal') {
    return cardNumberError;
  }

  if (!isCardNumberComplete(cardNumber)) {
    return 'cardNumberCount';
  }

  return 'normal';
}

export function isMonthError(mode: DateError | MonthError | YearError | 'normal' | '') {
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

export function isYearError(mode: DateError | MonthError | YearError | 'normal' | '') {
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

export function getExpiryDateChangeError(index: number, value: string): ExpiryDateError {
  if (!isNumericInput(value)) {
    return index === 0 ? 'notMonthNumber' : 'notYearNumber';
  }

  if (index === 0 && isInvalidMonth(value)) {
    return 'notMonthRange';
  }

  return 'normal';
}

export function getMonthBlurError(month: string): ExpiryDateError {
  if (isEmptyMonth(month)) {
    return 'emptyMonth';
  }

  if (isInvalidMonth(month)) {
    return 'notMonthRange';
  }

  return 'normal';
}

export function getYearBlurError(month: string, year: string): ExpiryDateError {
  if (`${month}${year}`.length === 0) {
    return 'emptyBoth';
  }

  if (year.length < 2) {
    return 'emptyYear';
  }

  return getMonthBlurError(month);
}

function isEmptyMonth(month: string): boolean {
  return month.length === 0 || month === '0' || month === '00';
}

function isInvalidMonth(month: string): boolean {
  return Number(month) > 12 || month === '00';
}
