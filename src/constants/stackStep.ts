export const STEPS = {
  CARD_NUMBER: '카드번호',
  BRAND: '카드사',
  EXPIRE_DATE: '유효기간',
  CVC: 'CVC',
  PASS_WORD: '비밀번호',
} as const;

export type StepType = (typeof STEPS)[keyof typeof STEPS];
