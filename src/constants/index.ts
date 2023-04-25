const CARD_INPUT_MAX_LENGTH: Record<string, number> = {
  cardNumber: 25,
  expiredDate: 7,
  ownerName: 30,
  cvc: 3,
  password: 1,
} as const;

const CARD_INPUT_MIN_LENGTH: Record<string, number> = {
  cardNumber: 25,
  expiredDate: 7,
  ownerName: 10,
  cvc: 3,
  password: 1,
} as const;

const SEPERATED_CARD_NUMBER_LENGTH: Record<string, number> = {
  FIRST: 4,
  SECOND: 11,
  THIRD: 18,
} as const;

const SEPERATED_EXPIRED_DATE_LENGTH = 2;

const PASSWORD_DIGIT_INDEX: Record<string, number> = {
  FIRST: 0,
  SECOND: 1,
} as const;

const SEPERATOR_STRING = {
  cardNumber: " - ",
  expiredDate: " / ",
};

const CARD_COLOR = [
  "red",
  "pink",
  "green",
  "blue",
  "black",
  "gray",
  "yellow",
  "orange",
  "aqua",
  "lime",
];

const ROUTER_PATH = {
  MyCard: "/",
  AddCard: "/AddCard",
};

const REGEX = {
  number: /^[0-9]+$/,
  english: /^[a-zA-Z]*$/,
} as const;

export {
  CARD_INPUT_MAX_LENGTH,
  CARD_INPUT_MIN_LENGTH,
  SEPERATED_CARD_NUMBER_LENGTH,
  PASSWORD_DIGIT_INDEX,
  CARD_COLOR,
  ROUTER_PATH,
  REGEX,
  SEPERATOR_STRING,
  SEPERATED_EXPIRED_DATE_LENGTH,
};
