import { startsWithNumberRegex } from '../util/startsWithNumberRegex';

const REGEX = {
  masterCard: startsWithNumberRegex(51, 55),
  visaCard: startsWithNumberRegex(4),
  numbers: /^\d*$/,
  allNumbers: /\d/gi,
  oneToNine: /^[1-9]$/,
  month: /^([0][1-9])|([1][0-2])$/,
  name: /^[a-zA-Z]+ ?[a-zA-Z]*$/,
  zero: /^[0]+$/,
} as const;

export default REGEX;
