export const COMPANY_NAMES = [
  'BC카드',
  '신한카드',
  '카카오뱅크',
  '현대카드',
  '우리카드',
  '롯데카드',
  '하나카드',
  '국민카드',
] as const;

export type CompanyName = (typeof COMPANY_NAMES)[number];

export const isCompanyName = (name: string): name is CompanyName => !!COMPANY_NAMES.find((companyName) => companyName === name)
