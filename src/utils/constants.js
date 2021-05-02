export const ERROR_TYPE = {
  VALIDATION: "validation",
};

export const CARD_INFO = {
  BACKGROUND_COLOR: "backgroundColor",
  BANK: "bank",
  CARD_NUMBERS: "cardNumbers",
  EXPIRATION_MONTH: "expirationMonth",
  EXPIRATION_YEAR: "expirationYear",
  OWNER_NAME: "ownerName",
  SECURITY_CODE: "securityCode",
  CARD_PASSWORDS: "cardPasswords",
};

export const LENGTH = {
  CARD_NUMBER: {
    MIN: 4,
    MAX: 4,
  },
  EXPIRATION_DATE: {
    MIN: 2,
    MAX: 2,
  },
  OWNER_NAME: {
    MIN: 0,
    MAX: 30,
    CARD_DISPLAY: 10,
  },
  SECURITY_CODE: {
    MIN: 3,
    MAX: 4,
  },
  CARD_PASSWORDS: {
    MIN: 1,
    MAX: 1,
  },
};

export const REG_EXP = {
  OWNER_NAME: new RegExp(`^[가-힣|A-Z|\\s]{${LENGTH.OWNER_NAME.MIN},${LENGTH.OWNER_NAME.MAX}}$`),
};
