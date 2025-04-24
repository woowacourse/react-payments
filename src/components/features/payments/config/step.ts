export const INPUT_NAME = {
  cardNumber: 'cardNumber',
  cardBank: 'cardBank',
  expirationDate: 'expirationDate',
  CVC: 'CVC',
  cardPassword: 'cardPassword',
} as const;
export type InputNameType = keyof typeof INPUT_NAME;

export const INPUT_STEP: Record<InputNameType, number> = {
  cardNumber: 1,
  cardBank: 2,
  expirationDate: 3,
  CVC: 4,
  cardPassword: 5,
} as const;
