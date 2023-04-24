export const LIMIT_LENGTH: Readonly<{ [key: string]: number }> = {
  ALL_CARD_NUMBERS: 16,
  CARD_NUMBER: 4,
  ALL_EXPIRATION_DATE: 4,
  EXPIRATION_DATE: 2,
  NAME: 20,
  SECURITY_CODE: 3,
  PASSWORD: 1,
};

interface ValidInput {
  ONLY_NUMBER: RegExp;
  ONLY_ENGLISH: RegExp;
  INVALID_BLANK: string;
  VALID_MONTH: number;
}

export const VALID_INPUT: Readonly<ValidInput> = {
  ONLY_NUMBER: /[^\d]/g,
  ONLY_ENGLISH: /[^a-z A-Z]/g,
  INVALID_BLANK: "  ",
  VALID_MONTH: 12,
};
