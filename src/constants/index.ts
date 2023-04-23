const INPUT_MAX_LENGTH: Readonly<{ [key: string]: number }> = {
  CARD_NUMBER: 25,
  EXPIRED_DATE: 7,
  OWNER_NAME: 30,
  CVC: 3,
  PASSWORD: 1,
};

const SEPERATED_CARD_NUMBER_LENGTH: Readonly<{ [key: string]: number }> = {
  FIRST: 4,
  SECOND: 11,
  THIRD: 18,
  NUMBER_START: 0,
  SECURE_NUMBER_START: 12,
};

const CARD_NUMBER_ERASE_SYMBOL: Readonly<{ [key: string]: number }> = {
  FIRST: 7,
  SECOND: 14,
  THIRD: 21,
};

const PASSWORD_DIGIT_INDEX: Readonly<{ [key: string]: number }> = {
  FIRST: 0,
  SECOND: 1,
};

const EXPIRED_DATE_PLUS_SYMBOL: Readonly<number> = 2;

const EXPIRED_DATE_ERASE_SYMBOL: Readonly<{ [key: string]: number }> = {
  SEPARATE: 5,
  FROM: 0,
  TO: 2,
};

const INPUT_WIDTH: Readonly<{ [key: string]: string }> = {
  EXPIRED_DATE: '137px',
  CVC: '84px',
  PASSWORD: '43px',
};

const CARD_ID_VALUE: Readonly<{ [key: string]: 'cardNumber' | 'expiredDate' | 'ownerName' | 'cvc' | 'password' }> = {
  CARD_NUMBER: 'cardNumber',
  EXPIRED_DATE: 'expiredDate',
  OWNER_NAME: 'ownerName',
  CVC: 'cvc',
  PASSWORD: 'password',
};

const BACKSPASE_KEY: Readonly<string> = 'Backspace';

const RANDOM_COLOR = ['red', 'pink', 'green', 'blue', 'black', 'gray', 'yellow', 'orange', 'aqua', 'lime'];

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
