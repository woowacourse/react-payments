export const MAGIC_NUMBER = {
  placeholders: {
    cardNumber: "1234",
    month: "MM",
    year: "YY",
    cvcNumber: "123",
    cardBrand: "카드사를 선택해주세요",
  },
  maxLength: {
    cardNumber: 4,
    expirationPeriod: 2,
    cvcNumber: 3,
    password: 2,
  },
};

export const CARD_COMPANIES = [
  "BC카드",
  "신한카드",
  "카카오뱅크",
  "현대카드",
  "우리카드",
  "롯데카드",
  "하나카드",
  "국민카드",
] as const;

export const INPUT_TYPE = {
  cardNumbers: "cardNumbers",
  expirationPeriod: "expirationPeriod",
  cvcNumber: "cvcNumber",
  cardBrand: "cardBrand",
  password: "password",
} as const;

export const CARD_IMAGE = {
  visa: "./visa.svg",
  mastercard: "./mastercard.svg",
} as const;

export const CARD_POSITION = {
  first: "first",
  second: "second",
  third: "third",
  fourth: "fourth",
} as const;

export const PERIOD_POSITION = {
  month: "month",
  year: "year",
} as const;

export const CARD_BRAND_COLORS: Record<string, string> = {
  BC카드: "#F04651",
  신한카드: "#0046FF",
  카카오뱅크: "#FFE600",
  현대카드: "#000000",
  우리카드: "#007BC8",
  롯데카드: "#ED1C24",
  하나카드: "#009490",
  국민카드: "#6A6056",
};

export const ERROR_MESSAGE = {
  default: "숫자만 입력 가능합니다.",
  month: "유효한 월을 입력해주세요.",
  year: "유효한 연도를 입력해주세요.",
};
export type InputType = keyof typeof INPUT_TYPE;
export type CardImageType = keyof typeof CARD_IMAGE;
export type CardPositionType = keyof typeof CARD_POSITION;
export type PeriodPositionType = keyof typeof PERIOD_POSITION;
