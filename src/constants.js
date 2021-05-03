export const PAGE = {
  HOME: {
    ID: "HOME",
    HEADER_TEXT: "보유카드",
  },
  CARD_ADDITION: {
    ID: "CARD_ADDITION",
    HEADER_TEXT: "카드추가",
  },
  COMPLETE_CARD_ADDITION: {
    ID: "COMPLETE_CARD_ADDITION",
    HEADER_TEXT: "",
  },
};

export const FORMAT_CHAR = {
  HIDDEN_NUMBER: "•",
  CARD_NUMBERS_SEPARATOR: " - ",
  CARD_NUMBERS_SEPARATOR_REG: /[\s-]/g,
  EXPIRATION_DATE_SEPARATOR: "/",
};

export const CARD_NUMBER = (() => {
  const LENGTH = 4;
  const PARTIAL_LENGTH = 4;
  const FORMATTED_LENGTH =
    PARTIAL_LENGTH * LENGTH +
    FORMAT_CHAR.CARD_NUMBERS_SEPARATOR.length * (LENGTH - 1);

  return {
    LENGTH,
    PARTIAL_LENGTH,
    FORMATTED_LENGTH,
  };
})();

export const EXPIRATION_DATE = (() => {
  const MONTH_LENGTH = 2;
  const YEAR_LENGTH = 2;
  const LENGTH = MONTH_LENGTH + YEAR_LENGTH;
  const FORMATTED_LENGTH =
    LENGTH + FORMAT_CHAR.EXPIRATION_DATE_SEPARATOR.length;

  return {
    LENGTH,
    FORMATTED_LENGTH,
    MONTH_LENGTH,
    YEAR_LENGTH,
  };
})();

export const USERNAME = {
  MIN_LENGTH: 2,
  MAX_LENGTH: 30,
};

export const SECURE_CODE_LENGTH = 3;

export const PASSWORD = {
  MIN_VALUE_PER_UNIT: 0,
  MAX_VALUE_PER_UNIT: 9,
  MAX_LENGTH_PER_UNIT: 9,
};

export const CARD_DESCRIPTION = {
  MIN_LENGTH: 1,
  MAX_LENGTH: 30,
};
