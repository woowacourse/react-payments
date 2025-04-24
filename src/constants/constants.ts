export const CARD_FORM_TYPE = {
  cardNumbers: "cardNumbers",
  expirationPeriod: "expirationPeriod",
  cvcNumber: "cvcNumber",
  cardCompany: "cardCompany",
  password: "password",
} as const;

export const CARD_TYPE = {
  visa: "visa",
  master: "master",
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

export const PLACEHOLDER = {
  cardNumber: "1234",
  expirationPeriod: {
    month: "MM",
    year: "YY",
  },
  cvcNumber: "123",
  password: "비밀번호를 입력해 주세요",
};

export const MAX_LENGTH = {
  cardNumber: 4,
  expirationPeriod: 2,
  cvcNumber: 3,
  password: 2,
};
