export const DOUBLE_BLANK = / {2,}/;
export const UPPERCASE_AND_SPACE_ONLY = /^[A-Z\s]+$/;

export const CARD_NUMBER = {
  FIELD_LENGTH : 4,
  TOTAL_FIELDS : 4,
}

export const MONTH_RANGE = {
  MIN: 1,
  MAX: 12,
};

export const YEAR_RANGE = {
  MIN: 0,
  MAX: 99,
};

export const CARD_CONFIG = {
  VISA: 4,
  MASTER: {
    START: 51,
    END: 55,
  },
};
