export const CARD_FORM_TYPE = {
  cardNumber: "cardNumber",
  expirationPeriod: "expirationPeriod",
  cvcNumber: "cvcNumber",
  cardCompany: "cardCompany",
  password: "password",
} as const;

export const CARD_NUMBERS_SEGMENT = {
  first: "first",
  second: "second",
  third: "third",
  fourth: "fourth",
} as const;

export const EXPIRATION_PERIOD_SEGMENT = {
  month: "month",
  year: "year",
} as const;

export const CARD_TYPE = {
  visa: "visa",
  master: "master",
} as const;

export const CARD_COMPANY = {
  none: "",
  bc: "bc",
  shinhan: "shinhan",
  kakaobank: "kakaobank",
  hyundai: "hyundai",
  woori: "woori",
  lotte: "lotte",
  hana: "hana",
  kb: "kb",
} as const;

export const CARD_COMPANY_INFO = [
  { value: "bc", text: "BC카드" },
  { value: "shinhan", text: "신한카드" },
  { value: "kakaobank", text: "카카오뱅크" },
  { value: "hyundai", text: "현대카드" },
  { value: "woori", text: "우리카드" },
  { value: "lotte", text: "롯데카드" },
  { value: "hana", text: "하나카드" },
  { value: "kb", text: "국민카드" },
];

export const PLACEHOLDER = {
  cardNumber: "1234",
  expirationPeriod: {
    month: "MM",
    year: "YY",
  },
  cvcNumber: "123",
  cardCompany: "카드사를 선택해 주세요",
  password: "비밀번호를 입력해 주세요",
} as const;

export const MAX_LENGTH = {
  cardNumber: 4,
  expirationPeriod: 2,
  cvcNumber: 3,
  password: 2,
} as const;
