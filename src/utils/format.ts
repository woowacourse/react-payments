import { LOCALE } from '../constants/i18n';

export const formatNumberNDigits = (number: number, digits: number) =>
  number.toLocaleString(LOCALE.KR, {
    minimumIntegerDigits: digits,
  });
