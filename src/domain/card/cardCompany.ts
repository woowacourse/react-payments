export const DEFAULT_CARD_COLOR = '#333333';

export const CARD_COMPANIES = {
  bc: {name: 'BC카드', issuerCode: '31', color: 'red', backgroundColor: '#F04651'},
  shinhan: {name: '신한카드', issuerCode: '41', color: 'blue', backgroundColor: '#0046FF'},
  kakao: {name: '카카오뱅크', issuerCode: '15', color: 'yellow', backgroundColor: '#FFE600'},
  hyundai: {name: '현대카드', issuerCode: '61', color: 'black', backgroundColor: '#000000'},
  woori: {name: '우리카드', issuerCode: 'W1', color: 'sky', backgroundColor: '#007BC8'},
  lotte: {name: '롯데카드', issuerCode: '71', color: 'orange', backgroundColor: '#ED1C24'},
  hana: {name: '하나카드', issuerCode: '21', color: 'teal', backgroundColor: '#009490'},
  kookmin: {name: '국민카드', issuerCode: '11', color: 'gray', backgroundColor: '#6A6056'},
} as const;

export type CardCompanyType = keyof typeof CARD_COMPANIES;
export type IssuerCodeType = (typeof CARD_COMPANIES)[CardCompanyType]['issuerCode'];
export type CardColorType = (typeof CARD_COMPANIES)[CardCompanyType]['color'];

export const CARD_COMPANY_KEYS = Object.keys(CARD_COMPANIES) as CardCompanyType[];

export const getCompanyByIssuerCode = (issuerCode: string): CardCompanyType | null =>
  CARD_COMPANY_KEYS.find((company) => CARD_COMPANIES[company].issuerCode === issuerCode) ?? null;
