export interface CardType {
  id: string;
  cardNumbers: Record<number, string>;
  expiredDate: Record<number, string>;
  cardOwnerName: string;
  cardCompany: CardCompanyName;
  nickname?: string;
}

export type CardCompanyType =
  | 'bc-card'
  | 'hana-card'
  | 'hyundai-card'
  | 'kakao-card'
  | 'kookmin-card'
  | 'lotte-card'
  | 'shinhan-card'
  | 'woori-card';

export type CardCompanyName =
  | 'BC카드'
  | '신한카드'
  | '카카오뱅크'
  | '현대카드'
  | '우리카드'
  | '롯데카드'
  | '하나카드'
  | '국민카드'
  | '카드사';

export interface CardCompanies {
  type: CardCompanyType;
  name: CardCompanyName;
  color: string;
}
