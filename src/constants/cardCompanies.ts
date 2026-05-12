import type { CardCompany } from '../types/cardStausTypes';

export const CARD_COMPANIES: { value: Exclude<CardCompany, ''>; label: string }[] = [
  { value: 'bc', label: 'BC카드' },
  { value: 'shinhan', label: '신한카드' },
  { value: 'kakao', label: '카카오뱅크' },
  { value: 'hyundai', label: '현대카드' },
  { value: 'woori', label: '우리카드' },
  { value: 'lotte', label: '롯데카드' },
  { value: 'hana', label: '하나카드' },
  { value: 'kookmin', label: '국민카드' },
];

export const CARD_COMPANY_LABEL: Record<Exclude<CardCompany, ''>, string> = CARD_COMPANIES.reduce(
  (labels, company) => ({
    ...labels,
    [company.value]: company.label,
  }),
  {} as Record<Exclude<CardCompany, ''>, string>,
);
