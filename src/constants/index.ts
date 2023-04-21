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

const SEPERATED_CARD_NUMBER_LENGTH = Object.freeze({
  FIRST: 4,
  SECOND: 11,
  THIRD: 18,
});

const PASSWORD_DIGIT_INDEX = Object.freeze({
  FIRST: 0,
  SECOND: 1,
});

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

export {
  CARD_INPUT_MAX_LENGTH,
  CARD_INPUT_MIN_LENGTH,
  SEPERATED_CARD_NUMBER_LENGTH,
  PASSWORD_DIGIT_INDEX,
  CARD_COLOR,
};
