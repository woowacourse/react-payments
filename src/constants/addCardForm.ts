export const ADD_CARD_FORM_STEP = {
  CARD_NUMBER: {
    order: 1,
    next: "COMPANY",
  },
  COMPANY: {
    order: 2,
    next: "VALIDITY_PERIOD",
  },
  VALIDITY_PERIOD: {
    order: 3,
    next: "CVC",
  },
  CVC: {
    order: 4,
    next: "PASSWORD",
  },
  PASSWORD: {
    order: 5,
    next: null,
  },
} as const;

export type AddCardFormStepKey = keyof typeof ADD_CARD_FORM_STEP;
