export const URL = {
  HOME: "/",
  CARD_ADDITION: "/CardAddition",
  COMPLETE_CARD_ADDITION: "/CompleteCardAddition",
};

export const ALERT_MESSAGE = {
  PLEASE_SELECT_CARD_CORP: "카드 회사를 선택해주세요.",
};

export const QUERY_STRING_KEY = {
  ID: "id",
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

export const PASSWORD_INPUT_LENGTH = 1;

export const CARD_DESCRIPTION = {
  MIN_LENGTH: 1,
  MAX_LENGTH: 30,
};

export const CARD = {
  POCO: {
    name: "포코 카드",
    color: "red",
  },
  JUN: {
    name: "준 카드",
    color: "blue",
  },
  PARK: {
    name: "공원 카드",
    color: "green",
  },
  BRAN: {
    name: "브랜 카드",
    color: "pink",
  },
  LOYD: {
    name: "로이드 카드",
    color: "aqua",
  },
  DOBI: {
    name: "도비 카드",
    color: "light-pink",
  },
  COLIN: {
    name: "콜린 카드",
    color: "orange",
  },
  SUN: {
    name: "썬 카드",
    color: "yellow",
  },
  UNKNOWN: {
    name: "",
    color: "gray",
  },
};

export const CARD_SIZE = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

export const VIRTUAL_KEYBOARD_TARGET_INPUT = {
  SECURE_CODE: "secureCode",
  FIRST_PASSWORD: "firstPassword",
  SECOND_PASSWORD: "secondPassword",
};

export const MODAL_DATA_KEY = {
  CHAR_INSERTION: "charInsertion",
  CHAR_DELETION: "charDeletion",
};

export const MODAL_RESERVED_KEYWORD = {
  WAIT_FOR_INSERTION: "waitForInsertion",
};
