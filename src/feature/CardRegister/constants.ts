export const CARD_NUMBER_INPUT_COUNT = 4;
export const CARD_NUMBER_CHUNK_LENGTH = 4;
export const CARD_NUMBER_MASK_START_INDEX = 2;
export const CARD_NUMBER_MASK_CHAR = "·";
export const UNKNOWN_CARD_NUMBER_CHAR = "#";

export const VISA_PREFIX = "4";
export const MASTERCARD_BRAND_PREFIX_LENGTH = 2;
export const MASTERCARD_PREFIX_MIN = 51;
export const MASTERCARD_PREFIX_MAX = 55;

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
