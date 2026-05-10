export const DEFAULT_CARD_COLOR = '#333333';

export const CARD_COMPANIES = {
  bc: {name: 'BC카드', backgroundColor: '#F04651'},
  shinhan: {name: '신한카드', backgroundColor: '#0046FF'},
  kakao: {name: '카카오뱅크', backgroundColor: '#FFE600'},
  hyundai: {name: '현대카드', backgroundColor: '#000000'},
  woori: {name: '우리카드', backgroundColor: '#007BC8'},
  lotte: {name: '롯데카드', backgroundColor: '#ED1C24'},
  hana: {name: '하나카드', backgroundColor: '#009490'},
  kookmin: {name: '국민카드', backgroundColor: '#6A6056'},
} as const;

export type CardCompanyType = keyof typeof CARD_COMPANIES;
