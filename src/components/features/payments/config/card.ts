export const CARD_TYPE = {
  visa: 'visa',
  master: 'master',
  none: 'none',
};
export type CardType = (typeof CARD_TYPE)[keyof typeof CARD_TYPE];

export const CARD_NUMBER = {
  length: {
    min: 0,
    max: 4,
    prefix: 2,
  },
};

export const EXPIRATION_DATE = {
  length: 2,
  padLeftThreshold: 1,
  month: {
    min: 1,
    max: 12,
  },
};

export const CVC = {
  length: { min: 0, max: 3 },
};

export const CARD_PASSWORD = {
  length: { min: 0, max: 2 },
};
