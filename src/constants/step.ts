export type StepType = keyof typeof STEP;

export const STEP = {
  CardNumber: 'CardNumber',
  CardCompany: 'CardCompany',
  CardValidityPeriod: 'CardValidityPeriod',
  CardCVC: 'CardCVC',
  CardPassword: 'CardPassword',
} as const;
