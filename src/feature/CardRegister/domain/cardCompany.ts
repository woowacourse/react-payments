export const CARD_COMPANIES = {
  bc: {name: 'BC카드', color: '#F04651'},
  shinhan: {name: '신한카드', color: '#0046FF'},
  kakao: {name: '카카오뱅크', color: '#FFE600'},
  hyundai: {name: '현대카드', color: '#000000'},
  woori: {name: '우리카드', color: '#007BC8'},
  lotte: {name: '롯데카드', color: '#ED1C24'},
  hana: {name: '하나카드', color: '#009490'},
  kookmin: {name: '국민카드', color: '#6A6056'},
} as const;

export type CardCompanyType = keyof typeof CARD_COMPANIES;
