const INPUT_MAX_LENGTH = Object.freeze({
  CARD_NUMBER: 25,
  EXPIRED_DATE: 7,
  OWNER_NAME: 30,
  CVC: 3,
  PASSWORD: 1,
});

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
  INPUT_MAX_LENGTH,
  SEPERATED_CARD_NUMBER_LENGTH,
  PASSWORD_DIGIT_INDEX,
  CARD_COLOR,
};
