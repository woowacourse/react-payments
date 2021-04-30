export const ERROR_TYPE = {
  VALIDATION: "validation",
};

export const CARD_INFO = {
  BACKGROUND_COLOR: "backgroundColor",
  BANK: "bank",
  CARD_NUMBERS: "cardNumbers",
  EXPIRATION_DATE: "expirationDate",
  OWNER_NAME: "ownerName",
  CARD_PASSWORDS: "cardPasswords",
};

export const LENGTH = {
  CARD_NUMBER: {
    MIN: 4,
    MAX: 4,
  },
};

export const REG_EXP = {
  CARD_NUMBERS: new RegExp(`^[\\d]{${LENGTH.CARD_NUMBER.MIN},${LENGTH.CARD_NUMBER.MAX}}$`),
};
