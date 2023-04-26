const INPUT_MAX_LENGTH = {
  cardNumber: 25,
  expiredDate: 7,
  ownerName: 30,
  cvc: 3,
  passwordFirst: 1,
  passwordSecond: 1,
} as const;

const INPUT_MIN_LENGTH = {
  cardNumber: 25,
  expiredDate: 7,
  ownerName: 1,
  cvc: 3,
  password: 1,
  passwordFirst: 1,
  passwordSecond: 1,
} as const;

const SEPERATED_CARD_NUMBER_LENGTH = {
  FIRST: 4,
  SECOND: 11,
  THIRD: 18,
  NUMBER_START: 0,
  SECURE_NUMBER_START: 12,
} as const;

const CARD_NUMBER_ERASE_SYMBOL = {
  FIRST: 8,
  SECOND: 15,
  THIRD: 23,
  FOURTH: 26,
  REAL_FIRST: 5,
  REAL_SECOND: 9,
  REAL_THIRD: 13,
  REAL_FOURTH: 16
} as const;

const ERASE_UNTIL_CARD_NUMBER = {
  FIRST: 0,
  SECOND: 8,
  THIRD: 15,
  FOURTH: 22,
  REAL_FIRST: 0,
  REAL_SECOND: 4,
  REAL_THIRD: 8,
  REAL_FOURTH: 12
} as const;

const PASSWORD_DIGIT_INDEX = {
  FIRST: 0,
  SECOND: 1,
} as const;

const EXPIRED_DATE_PLUS_SYMBOL = 2 as const;

const EXPIRED_DATE_ERASE_SYMBOL = {
  SEPARATE_FIRST: 5,
  SEPARATE_SECOND: 8,
  FROM: 0,
  TO_FIRST: 0,
  TO_SECOND: 6,
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
  PASSWORD_FIRST: 'passwordFirst',
  PASSWORD_SECOND: 'passwordSecond',
} as const;

const BACKSPASE_KEY = 'Backspace' as const;

const RANDOM_COLOR = ['red', 'pink', 'green', 'blue', 'black', 'gray', 'yellow', 'orange', 'aqua', 'lime'] as const;

const CARD_BANK_COLOR_MAP: Record<string, { background: string; color: string }> = {
  BC카드: { background: 'rgb(222, 84, 86)', color: 'white' },
  신한카드: { background: 'rgb(19, 74, 245)', color: 'white' },
  카카오뱅크: { background: 'rgb(251, 230, 77)', color: 'black' },
  현대카드: { background: 'rgb(51, 51, 51)', color: 'white' },
  우리카드: { background: 'rgb(187, 223, 245)', color: 'rgb(51, 122, 194)' },
  롯데카드: { background: 'rgb(240, 240, 240)', color: 'rgb(225, 0, 0)' },
  하나카드: { background: 'rgb(64, 146, 143)', color: 'white' },
  국민카드: { background: 'rgb(85, 79, 71)', color: 'rgb(247, 206, 71)' },
};

export {
  INPUT_MAX_LENGTH,
  INPUT_MIN_LENGTH,
  SEPERATED_CARD_NUMBER_LENGTH,
  CARD_NUMBER_ERASE_SYMBOL,
  PASSWORD_DIGIT_INDEX,
  EXPIRED_DATE_PLUS_SYMBOL,
  EXPIRED_DATE_ERASE_SYMBOL,
  INPUT_WIDTH,
  CARD_ID_VALUE,
  BACKSPASE_KEY,
  RANDOM_COLOR,
  ERASE_UNTIL_CARD_NUMBER,
  CARD_BANK_COLOR_MAP
};
