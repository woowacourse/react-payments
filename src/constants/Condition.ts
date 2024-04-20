const MAX_LENGTH = {
  cardNumber: 4,
  expirationDate: 2,
  userName: 20,
} as const;

const REG_EXP = {
  cardNumber: /^\d+$/,
  month: /^\d+$/,
  year: /^\d+$/,
  userName: /^[a-zA-Z\s]*$/,
} as const;

const CONDITION = {
  MAX_LENGTH,
  REG_EXP,
  hiddenCardNumber: '*',
  splitSlash: '/',
  showVisa: (first: number | undefined) => String(first)[0] === '4',
  showMasterCard: (first: number | undefined) =>
    String(first)[0] === '5' && ['1', '2', '3', '4', '5'].includes(String(first)[1]),
} as const;

export default CONDITION;
