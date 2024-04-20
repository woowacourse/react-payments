import { CARD_MARK, CARD_NUMBERS, CARD_USER } from './card';

export const CARD_NUMBER_REGEXP = new RegExp(
  `^[${CARD_NUMBERS.startNumber}-${CARD_NUMBERS.endNumber}]{${CARD_NUMBERS.length}}$`,
);

export const CARD_PERIOD_REGEXP = {
  month: /^(0?[1-9]|10|11|12)$/,
  year: /^\d{2}$/,
};

export const CARD_USER_NAME_REGEXP = new RegExp(
  `^[a-zA-Z\\s]{1,${CARD_USER.length.max}}$`,
);

const { visa, master } = CARD_MARK;
const { rangeOfSecondNumber } = master;
export const CARD_MARK_REGEXP = {
  visa: new RegExp(`^${visa.startNumber}[0-9]{15}$`),
  master: new RegExp(
    `^${master.startNumber}[${rangeOfSecondNumber.start}-${rangeOfSecondNumber.end}][0-9]{14}`,
  ),
};
