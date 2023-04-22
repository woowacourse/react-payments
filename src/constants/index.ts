const LOCAL_STORAGE_KEY = 'cardList';

const SECURITY_TEXT_ICON = '•';
const DATE_DIVIDER = '/';

const CARD_NUMBER_INPUT_UNIT_MAX_LENGTH = 5;
const CARD_NUMBER_INPUT_MAX_VISIBLE_LENGTH = 10;
const CARD_NUMBER_INPUT_MAX_LENGTH = 19;

const EXPIRATION_DATE_UNIT_LENGTH = 2;
const EXPIRATION_DATE_INPUT_MAX_LENGTH = 5;

const REGEX = {
  NON_WHITESPACE_CHAR: /[^ ]/g,
  ONLY_NUMBER: /^\d*$/,
  NON_NUMBER: /\D/g,
  ENGLISH_AND_WHITESPACE: /^[a-zA-Z ]*$/,
  DATE_FORMAT: /^(?:\d{0,2}\/?\d{0,2})?$/,
  TWO_DIGIT: /(\d{2})/,
  TWO_CHAR_SEQUENCE: /.{1,2}/g,
  FOUR_NUMBER_SEQUENCE: /(\d{4})/g,
};

export {
  LOCAL_STORAGE_KEY,
  SECURITY_TEXT_ICON,
  CARD_NUMBER_INPUT_UNIT_MAX_LENGTH,
  CARD_NUMBER_INPUT_MAX_VISIBLE_LENGTH,
  CARD_NUMBER_INPUT_MAX_LENGTH,
  DATE_DIVIDER,
  EXPIRATION_DATE_UNIT_LENGTH,
  EXPIRATION_DATE_INPUT_MAX_LENGTH,
  REGEX,
};
