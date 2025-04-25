export const STEPS = {
  CARD_NUMBER: '카드번호',
  BRAND: '카드사',
  EXPIRE_DATE: '유효기간',
  CVC: 'CVC',
  PASS_WORD: '비밀번호',
} as const;

export type StepType = (typeof STEPS)[keyof typeof STEPS];

export const FLOW_CONFIG = {
  [STEPS.CARD_NUMBER]: {
    next: STEPS.BRAND,
    prev: null,
  },
  [STEPS.BRAND]: {
    next: STEPS.EXPIRE_DATE,
    prev: STEPS.CARD_NUMBER,
  },
  [STEPS.EXPIRE_DATE]: {
    next: STEPS.CVC,
    prev: STEPS.BRAND,
  },
  [STEPS.CVC]: {
    next: STEPS.PASS_WORD,
    prev: STEPS.EXPIRE_DATE,
  },
} as const;

export type FlowType = keyof typeof FLOW_CONFIG;
