export type Card = {
  cardNumberOrigin: string;
  cardNumberHidden: string;
  cardDate: string;
  cardOwnerName: string;
  cardCVC: string;
  cardPassword: [FirstPassword, SecondPassword];
  cardCompany: CardCompany;
};

export type CreditCard = Card & {
  cardName: string;
};

export type FirstPassword = string;
export type SecondPassword = string;

export type CardCompany =
  | "BC카드"
  | "신한카드"
  | "카카오뱅크"
  | "현대카드"
  | "우리카드"
  | "롯데카드"
  | "하나카드"
  | "국민카드";
