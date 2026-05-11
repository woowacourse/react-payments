import type { DateError, MonthError, YearError } from '../types/errorTypes';
import type { CardBrandType } from '../types/cardStausTypes';

type ExpiryDateError = DateError | MonthError | YearError | 'normal';

export function getCardBrand(cardNumber: string): CardBrandType {
  if (cardNumber.startsWith('4')) {
    return 'visa';
  }

  const firstTwoDigits = Number(cardNumber.slice(0, 2));

  if (firstTwoDigits >= 51 && firstTwoDigits <= 55) {
    return 'master';
  }

  if (firstTwoDigits === 36) {
    return 'diners';
  }

  if (firstTwoDigits === 34 || firstTwoDigits === 37) {
    return 'amex';
  }

  const firstSixDigits = Number(cardNumber.slice(0, 6));

  if (isUnionPayPrefix(firstSixDigits)) {
    return 'unionPay';
  }

  return 'unknown';
}

export function getCardNumberLength(cardBrand: CardBrandType): number {
  if (cardBrand === 'diners') {
    return 14;
  }

  if (cardBrand === 'amex') {
    return 15;
  }

  return 16;
}

export function isPossibleCardBrandPrefix(cardNumber: string): boolean {
  if (cardNumber === '') {
    return true;
  }

  if (getCardBrand(cardNumber) !== 'unknown') {
    return true;
  }

  if (cardNumber.length === 1) {
    return ['3', '4', '5', '6'].includes(cardNumber);
  }

  if (cardNumber.startsWith('3')) {
    return ['34', '36', '37'].some((prefix) => prefix.startsWith(cardNumber));
  }

  if (cardNumber.startsWith('5')) {
    const firstTwoDigits = Number(cardNumber.slice(0, 2));
    return firstTwoDigits >= 51 && firstTwoDigits <= 55;
  }

  return isPossibleUnionPayPrefix(cardNumber);
}

function isPossibleUnionPayPrefix(cardNumber: string): boolean {
  if (!cardNumber.startsWith('62')) {
    return false;
  }

  if (cardNumber.length < 6) {
    const minPrefix = Number(cardNumber.padEnd(6, '0'));
    const maxPrefix = Number(cardNumber.padEnd(6, '9'));

    return (
      isRangeOverlapped(minPrefix, maxPrefix, 622126, 622925) ||
      isRangeOverlapped(minPrefix, maxPrefix, 624000, 626999) ||
      isRangeOverlapped(minPrefix, maxPrefix, 628200, 628899)
    );
  }

  return isUnionPayPrefix(Number(cardNumber.slice(0, 6)));
}

function isRangeOverlapped(
  minPrefix: number,
  maxPrefix: number,
  rangeMin: number,
  rangeMax: number,
): boolean {
  return minPrefix <= rangeMax && maxPrefix >= rangeMin;
}

function isUnionPayPrefix(prefix: number): boolean {
  return (
    (prefix >= 622126 && prefix <= 622925) ||
    (prefix >= 624000 && prefix <= 626999) ||
    (prefix >= 628200 && prefix <= 628899)
  );
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

export function isNumericInput(value: string): boolean {
  return value === '' || /^\d+$/.test(value);
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
