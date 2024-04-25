const MAX_LENGTH = {
  cardNumber: 4,
  expirationDate: 2,
  userName: 20,
  cvc: 3,
  password: 2,
} as const;

const REG_EXP = {
  cardNumber: /^\d{4}$/,
  month: /^(0[1-9]|1[0-2])$/,
  year: /^\d{2}$/,
  userName: /^[A-Z]+\s[A-Z]+$/,
  cvc: /^\d{3}$/,
  password: /^\d{2}$/,
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

const CARD_INFORMATION_APPEARED = {
  cardNumber: 1,
  selectedCard: 2,
  expirationDate: 3,
  userName: 4,
  cvc: 5,
  password: 6,
};

const CONDITION = {
  MAX_LENGTH,
  REG_EXP,
  hiddenCardNumber: '•',
  splitSlash: '/',
  showVisa: (first: number | undefined) => String(first)[0] === '4',
  showMasterCard: (first: number | undefined) =>
    String(first)[0] === '5' && ['1', '2', '3', '4', '5'].includes(String(first)[1]),
  CARD,
  CARD_INFORMATION_APPEARED,
} as const;

export default CONDITION;
