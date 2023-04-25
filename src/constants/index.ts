const INPUT_MAX_LENGTH = {
  CARD_NUMBER: 25,
  EXPIRED_DATE: 7,
  OWNER_NAME: 30,
  CVC: 3,
  PASSWORD: 1,
} as const;

const SEPERATED_CARD_NUMBER_LENGTH = {
  FIRST: 4,
  SECOND: 11,
  THIRD: 18,
  NUMBER_START: 0,
  SECURE_NUMBER_START: 12,
} as const;

const CARD_NUMBER_ERASE_SYMBOL = {
  FIRST: 7,
  SECOND: 14,
  THIRD: 21,
} as const;

const PASSWORD_DIGIT_INDEX = {
  FIRST: 0,
  SECOND: 1,
} as const;

const EXPIRED_DATE_PLUS_SYMBOL = 2 as const;

const EXPIRED_DATE_ERASE_SYMBOL = {
  SEPARATE: 5,
  FROM: 0,
  TO: 2,
} as const;

const INPUT_WIDTH = {
  EXPIRED_DATE: '137px',
  CVC: '84px',
  PASSWORD: '43px',
} as const;

const CARD_ID_VALUE = {
  CARD_NUMBER: 'cardNumber',
  EXPIRED_DATE: 'expiredDate',
  OWNER_NAME: 'ownerName',
  CVC: 'cvc',
  PASSWORD: 'password',
} as const;

const BACKSPASE_KEY = 'Backspace' as const;

const RANDOM_COLOR = ['red', 'pink', 'green', 'blue', 'black', 'gray', 'yellow', 'orange', 'aqua', 'lime'] as const;

export {
  INPUT_MAX_LENGTH,
  SEPERATED_CARD_NUMBER_LENGTH,
  CARD_NUMBER_ERASE_SYMBOL,
  PASSWORD_DIGIT_INDEX,
  EXPIRED_DATE_PLUS_SYMBOL,
  EXPIRED_DATE_ERASE_SYMBOL,
  INPUT_WIDTH,
  CARD_ID_VALUE,
  BACKSPASE_KEY,
  RANDOM_COLOR,
};
