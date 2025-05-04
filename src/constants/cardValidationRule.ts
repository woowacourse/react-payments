export const CARD_NUMBER_RULE = {
  MAX_LENGTH: 4,
  VISA_START_NUMBER: 4,
  MASTER_MIN_NUMBER: 51,
  MASTER_MAX_NUMBER: 55,
} as const;

export const CVC_RULE = {
  MAX_LENGTH: 3,
} as const;

export const EXPIRYDATE_RULE = {
  DATE_MAX_LENGTH: 2,
  DATE_MONTH_MIN: 1,
  DATE_MONTH_MAX: 12,
  DATE_YEAR_MIN: 25,
} as const;

export const PASSWORD_RULE = {
  MAX_LENGTH: 2,
} as const;
