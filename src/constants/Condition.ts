export const CARD_EXPIRATION = {
  INPUT_FIELD_COUNT: 2,
  MAX_LENGTH: 2,
  MIN_MONTH_RANGE: 1,
  MAX_MONTH_RANGE: 12,
} as const;

export const CARD_NUMBER = {
  INPUT_FIELD_COUNT: 4,
  MAX_LENGTH: 4,
} as const;

export const CARD_OWNER = {
  VALID_REGEX: /^[a-zA-Z][a-zA-Z ]*$/,
  INPUT_FIELD_COUNT: 1,
  MAX_LENGTH: 30,
} as const;

export const CARD = {
  VISA: 4,
  MIN_MASTER_CARD: 51,
  MAX_MASTER_CARD: 55,
};
