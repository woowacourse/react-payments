export const CARD_INPUT = {
  EACH_NUMBER_LENGTH: 4,
  EACH_EXPIRY_DATE_LENGTH: 2,
  CVC_LENGTH: 3,
  PASSWORD_LENGTH: 2,
};

export const NETWORK_BRAND_RULE = {
  VISA_START_NUMBER: "4",
  MASTER_START_NUMBER: "5",
  MASTER_SECOND_NUMBER: ["1", "2", "3", "4", "5"],
};

export const CARD_BRAND = {
  bc: {
    title: "BC카드",
    bgHex: "F04651",
    code: "31",
  },
  sinhan: {
    title: "신한카드",
    bgHex: "0046FF",
    code: "41",
  },
  kakao: {
    title: "카카오뱅크",
    bgHex: "FFE600",
    code: "15",
  },
  hyundai: {
    title: "현대카드",
    bgHex: "000000",
    code: "61",
  },
  woori: {
    title: "우리카드",
    bgHex: "007BC8",
    code: "W1",
  },
  lotte: {
    title: "롯데카드",
    bgHex: "ED1C24",
    code: "71",
  },
  hana: {
    title: "하나카드",
    bgHex: "009490",
    code: "21",
  },
  kookmin: {
    title: "국민카드",
    bgHex: "6A6056",
    code: "11",
  },
};

export const ERROR_CODE_TO_MESSAGE = {
  INVALID_CARD_NUMBER: "유효하지 않은 카드 번호입니다.",
  INVALID_CVC: "유효하지 않은 CVC입니다.",
  INVALID_EXPIRATION_DATE: "유효하지 않은 만료일입니다.",
};

export const FIELD_ERROR_CODES = {
  cardNumber: ["INVALID_CARD_NUMBER"],
  cardCVC: ["INVALID_CVC"],
  cardExpirationDate: ["INVALID_EXPIRATION_DATE"],
};
