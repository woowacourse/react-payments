const CARD_COMPANIES_ENGLISH = [
  'bc',
  'shinhan',
  'kakao',
  'hyundai',
  'woori',
  'lotte',
  'hana',
  'kb',
] as const;

const CARD_COMPANIES = {
  bc: 'BC카드',
  shinhan: '신한카드',
  kakao: '카카오뱅크',
  hyundai: '현대카드',
  woori: '우리카드',
  lotte: '롯데카드',
  hana: '하나카드',
  kb: '국민카드',
};

export type CardCompany = typeof CARD_COMPANIES_ENGLISH[number];

export const isCardCompany = (string: string): string is CardCompany => {
  return CARD_COMPANIES_ENGLISH.includes(string as CardCompany);
};

export const getCardCompanies = () => [...CARD_COMPANIES_ENGLISH];

export const cardCompanyEnglishToKorean = (company: CardCompany) => CARD_COMPANIES[company];
