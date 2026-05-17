export const CARD_NUMBER_INPUT_COUNT = 4;
export type CardNumberChunkLengths = readonly [number, number, number, number];
export const CARD_NUMBER_MASK_START_INDEX = 2;
export const CARD_NUMBER_MASK_CHAR = "·";
export const UNKNOWN_CARD_NUMBER_CHAR = "#";

export const EXPIRY_INPUT_COUNT = 2;
export const EXPIRY_MONTH_LENGTH = 2;
export const EXPIRY_YEAR_LENGTH = 2;
export const MIN_EXPIRY_MONTH = 1;
export const MAX_EXPIRY_MONTH = 12;

export const CVC_INPUT_COUNT = 1;
export const CVC_MIN_LENGTH = 3;
export const CVC_MAX_LENGTH = 4;

export const PASSWORD_INPUT_COUNT = 1;
export const PASSWORD_LENGTH = 2;

export const ERROR_MESSAGES = {
  cardNumber: "카드 번호 4자리를 입력해 주세요",
  EXPIRY_YEAR: {
    INVALID_LENGTH: "유효년도는 2자리를 입력해 주세요",
  },
  EXPIRY_MONTH: {
    INVALID_RANGE: "월은 01~12 사이로 입력해주세요",
    INVALID_LENGTH: "월은 2자리를 입력해 주세요",
  },
  CVC: {
    INVALID_LENGTH: "CVC 번호는 3자리 이상 입력해주세요",
  },
  PASSWORD: {
    INVALID_LENGTH: "카드 비밀번호 앞 2자리를 입력해 주세요",
  },
  CARD_COMPANY: {
    NOT_SELECTED: "카드사를 선택해주세요",
  },
};

export const CARD = {
  DEFAULT: {
    LENGTH: 16,
    CHUNK_LENGTHS: [4, 4, 4, 4] satisfies CardNumberChunkLengths,
  },
  VISA: {
    LENGTH: 16,
    CHUNK_LENGTHS: [4, 4, 4, 4] satisfies CardNumberChunkLengths,
    PREFIX: "4",
  },
  MASTERCARD: {
    LENGTH: 16,
    CHUNK_LENGTHS: [4, 4, 4, 4] satisfies CardNumberChunkLengths,
    PREFIX: {
      LENGTH: 2,
      MIN: 51,
      MAX: 55,
    },
  },
  DINER: {
    LENGTH: 14,
    CHUNK_LENGTHS: [4, 4, 4, 2] satisfies CardNumberChunkLengths,
    PREFIX: "36",
  },
  AMEX: {
    LENGTH: 15,
    CHUNK_LENGTHS: [4, 4, 4, 3] satisfies CardNumberChunkLengths,
    PREFIX: ["34", "37"],
  },
  UNION_PAY: {
    LENGTH: 16,
    CHUNK_LENGTHS: [4, 4, 4, 4] satisfies CardNumberChunkLengths,
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

export const CARD_FORM = {
  RENDER_STEP: {
    CARD_NUMBER: 1,
    CARD_COMPANY: 2,
    EXPIRY: 3,
    CVC: 4,
    PASSWORD: 5,
    COMPLETE: 6,
  },
};
