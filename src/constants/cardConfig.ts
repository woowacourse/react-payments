export const CARD_NUMBER = {
  maxLength: 4,
  fieldCount: 4,
};

export const CARD_EXPIRATION = {
  minMonth: 1,
  maxMonth: 12,
  minYear: 25,
  monthLength: 2,
  yearLength: 2,
};

export const CARD_CVC = {
  maxLength: 3,
};

export const CARD_TYPE = {
  visa: {
    startsWith: '4',
  },
  masterCard: {
    startsWith: ['51', '52', '53', '54', '55'],
  },
};
