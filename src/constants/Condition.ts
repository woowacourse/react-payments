const MAX_LENGTH = {
  cardNumber: 4,
  expirationDate: 2,
  userName: 20,
} as const;

const REG_EXP = {
  cardNumber: /^\d{4}$/,
  month: /^(0[1-9]|1[0-2])$/,
  year: /^\d{2}$/,
  userName: /^[A-Z]+\s[A-Z]+$/,
} as const;

const CARD = {
  bc: 0,
  sinhan: 1,
  kakaobank: 2,
  hyndai: 3,
  woori: 4,
  lotte: 5,
  hana: 6,
  kb: 7,
};

const CONDITION = {
  MAX_LENGTH,
  REG_EXP,
  hiddenCardNumber: '*',
  splitSlash: '/',
  showVisa: (first: number | undefined) => String(first)[0] === '4',
  showMasterCard: (first: number | undefined) =>
    String(first)[0] === '5' && ['1', '2', '3', '4', '5'].includes(String(first)[1]),
  CARD,
} as const;

export default CONDITION;
