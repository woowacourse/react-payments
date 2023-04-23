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
};

const PASSWORD_DIGIT_INDEX: Readonly<{ [key: string]: number }> = {
  FIRST: 0,
  SECOND: 1,
};

export { INPUT_MAX_LENGTH, SEPERATED_CARD_NUMBER_LENGTH, PASSWORD_DIGIT_INDEX };
