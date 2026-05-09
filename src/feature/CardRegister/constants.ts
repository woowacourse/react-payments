export const CARD_NUMBER_INPUT_COUNT = 4;
export const CARD_NUMBER_CHUNK_LENGTH = 4;
export const CARD_NUMBER_MASK_START_INDEX = 2;
export const CARD_NUMBER_MASK_CHAR = "·";
export const UNKNOWN_CARD_NUMBER_CHAR = "#";

export const EXPIRY_INPUT_COUNT = 2;
export const EXPIRY_VALUE_LENGTH = 2;
export const MIN_EXPIRY_MONTH = 1;
export const MAX_EXPIRY_MONTH = 12;

export const CVC_INPUT_COUNT = 1;
export const CVC_LENGTH = 3;

export const PASSWORD_INPUT_COUNT = 1;
export const PASSWORD_LENGTH = 2;

export const ERROR_MESSAGES = {
  cardNumber: "카드 번호 4자리를 입력해 주세요",
  expiryLength: "2자리를 입력해 주세요",
  expiryMonthRange: "월은 01~12 사이로 입력해주세요.",
  cvc: "CVC 번호 3자리를 입력해 주세요",
  password: "카드 비밀번호 앞 2자리를 입력해 주세요",
};

export const CARD = {
  VISA: {
    LENGTH: 16,
    PREFIX: "4",
  },
  MASTERCARD: {
    LENGTH: 16,
    PREFIX: {
      LENGTH: 2,
      MIN: 51,
      MAX: 55,
    },
  },
  DINER: {
    LENGTH: 14,
    PREFIX: "36",
  },
  AMEX: {
    LENGTH: 15,
    PREFIX: ["34", "37"],
  },
  UNION_PAY: {
    LENGTH: 16,
    FIRST_PREFIX: {
      LENGTH: 6,
      MIN: 622126,
      MAX: 622925,
    },
    SECOND_PREFIX: {
      LENGTH: 3,
      MIN: 624,
      MAX: 626,
    },
    THIRD_PREFIX: {
      LENGTH: 4,
      MIN: 6282,
      MAX: 6288,
    },
  },
};
