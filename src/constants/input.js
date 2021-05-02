export const CARD_NUMBER_INPUT = {
  NAME: {
    FIRST: '0',
    SECOND: '1',
    THIRD: '2',
    FOURTH: '3',
  },
  LENGTH: 4,
  RANGE: {
    MIN: '0',
    MAX: '9999',
  },
};

export const CARD_OWNER_INPUT = {
  LENGTH: {
    MAX: 30,
  },
};

export const CARD_PASSWORD_INPUT = {
  NAME: {
    FIRST: '0',
    SECOND: '1',
  },
  LENGTH: 1,
};

export const EXPIRED_DATE_INPUT = {
  NAME: {
    MONTH: 'month',
    YEAR: 'year',
  },
  RANGE: {
    MONTH: {
      MIN: '1',
      MAX: '12',
    },
    YEAR: {
      MIN: '0',
      MAX: '99',
    },
  },
  LENGTH: 2,
};

export const SECURITY_CODE_INPUT = {
  LENGTH: 3,
};
