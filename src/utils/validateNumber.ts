import { DIGITS_ONLY_REGEX } from '../constants';

export const isOnlyDigits = (value: string) => DIGITS_ONLY_REGEX.test(value);
