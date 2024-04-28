export interface CardInfo {
  cardNumbers: string[];
  expirationDate: string[];
  cardOwnerName: string;
  cardCompany: string;
  cardCVCNumber: string;
  cardPassword: string;
}

export type CardCompany =
  | 'BC카드'
  | '신한카드'
  | '카카오뱅크'
  | '현대카드'
  | '우리카드'
  | '롯데카드'
  | '하나카드'
  | '국민카드';
