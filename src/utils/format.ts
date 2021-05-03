import { LOCALE } from '../constants/i18n';

export const formatNumber2Digits = (number: number) =>
  number.toLocaleString(LOCALE.KR, {
    minimumIntegerDigits: 2,
  });
