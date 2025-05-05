export const INPUT_NAME = {
  cardNumber: 'cardNumber',
  cardBank: 'cardBank',
  expirationDate: 'expirationDate',
  CVC: 'CVC',
  cardPassword: 'cardPassword',
} as const;
export type InputNameType = keyof typeof INPUT_NAME;

export const INPUT_STEP = [
  'cardNumber',
  'cardBank',
  'expirationDate',
  'CVC',
  'cardPassword',
] as const;
