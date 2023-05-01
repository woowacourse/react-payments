const LOCAL_STORAGE_KEY = "cardList";

const PATH = {
  ROOT: "/",
  ADD: "/add",
  REGISTER: "/register",
} as const;

const CARD_ISSUERS = [
  "BC카드",
  "신한카드",
  "카카오뱅크",
  "현대카드",
  "우리카드",
  "롯데카드",
  "하나카드",
  "국민카드",
] as const;

const SECURITY_TEXT_ICON = "•";
const DATE_DIVIDER = "/";

const REGEX = {
  NON_WHITESPACE_CHAR: /[^ ]/g,
  ONLY_NUMBER: /^\d*$/,
  NON_NUMBER: /\D/g,
  ENGLISH_AND_WHITESPACE: /^[A-Za-z]+[A-Za-z\s]*$/,
  DATE_FORMAT: /^(?:\d{0,2}\/?\d{0,2})?$/,
  TWO_DIGIT: /(\d{2})/,
  TWO_CHAR_SEQUENCE: /.{1,2}/g,
  FOUR_CHAR_SEQUENCE: /.{1,4}/g,
  FOUR_NUMBER_SEQUENCE: /(\d{4})/g,
} as const;

export {
  LOCAL_STORAGE_KEY,
  PATH,
  CARD_ISSUERS,
  SECURITY_TEXT_ICON,
  DATE_DIVIDER,
  REGEX,
};
