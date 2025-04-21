export const CARD_TYPE_PREFIXES = {
  VISA: ["4"],
  MASTERCARD: ["51", "52", "53", "54", "55"],
};

export const CARD_TYPE_PATH = {
  VISA: "./assets/Visa.png",
  MASTERCARD: "./assets/Mastercard.png",
  NONE: "",
};

export const CARD_INFO_LENGTH = {
  NUMBER: 4,
  EXPIRATION: 2,
  CVC: 3,
};

export const EXPIRATION_DATE = {
  MONTH: {
    MIN: 1,
    MAX: 12,
  },
  YEAR: {
    MAX_OFFSET: 10,
  },
};
