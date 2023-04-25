export const NUMBERS = {
  MAX_CARD: 16,
  EACH_CARD: 4,
  MAX_EXPIREDATE: 5,
  MAX_SECURITY: 3,
  MAX_PASSWORD: 2,
  EACH_PASSWORD: 1,
  MAX_OWNER_NAME: 30,
  MIN_OWNER_NAME: 3,
} as const;

export const CARD_NUMBER_TYPES = [
  "first",
  "second",
  "third",
  "fourth",
] as const;

export const PASSWORD_NUMBER_TYPES = ["first", "second"] as const;
