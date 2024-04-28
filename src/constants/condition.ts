export const INPUT_COUNTS = {
  CARD_NUMBERS: 4,
  EXPIRATION_PERIOD: 2,
};

export const CARD_BRAND_INFO = {
  VISA: {
    START_NUMBER: 4,
  },
  MASTER: {
    START_NUMBER: 51,
    END_NUMBER: 55,
  },
};

export const MAX_LENGTH = {
  OWNER_NAME: 30,
};

export const MIN_LENGTH = {
  OWNER_NAME: 2,
};

export const VALID_LENGTH = {
  CARD_NUMBERS: 4,
  EXPIRATION_PERIOD: 2,
  PASSWORD: 2,
  CVC_NUMBERS: 3,
};

export const REGISTER_STEP = {
  CARD_NUMBERS: 1,
  CARD_BRAND: 2,
  EXPIRATION_PERIOD: 3,
  OWNER_NAME: 4,
  CVC: 5,
  PASSWORD: 6,
  ALL_PASSED: 7,
};
