export const CREDIT_CARD_LENGTH = {
  numbers: 16,
  expiry: 5,
  monthExpiry: 2,
  cvc: 3,
  password: 1,
} as const;

export const CREDIT_CARD_MAX_LENGTH = {
  owner: 20,
  alias: 10,
  monthExpiry: 12,
  yearExpiry: 5,
} as const;

export const CREDIT_CARD_NUMBER = {
  iilLength: 8,
} as const;

export const CREDIT_CARD = 'creditCard';
