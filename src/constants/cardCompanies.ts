import type { CardCompany } from '../types/cardStatusTypes';

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

export const CARD_COMPANY_ISSUER_CODE: Record<Exclude<CardCompany, ''>, string> = {
  bc: '31',
  shinhan: '41',
  kakao: '15',
  hyundai: '61',
  woori: 'W1',
  lotte: '71',
  hana: '21',
  kookmin: '11',
};

export const ISSUER_CODE_CARD_COMPANY = Object.fromEntries(
  Object.entries(CARD_COMPANY_ISSUER_CODE).map(([company, issuerCode]) => [issuerCode, company]),
) as Record<string, Exclude<CardCompany, ''>>;
