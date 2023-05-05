export type CardCompany =
  | "비씨카드"
  | "하나카드"
  | "현대카드"
  | "카카오뱅크"
  | "국민카드"
  | "롯데카드"
  | "신한카드"
  | "우리카드"
  | undefined;

export type CardNumber = {
  firstGroup: string;
  secondGroup: string;
  thirdGroup: string;
  fourthGroup: string;
};

export type CardExpirationDateKey = "month" | "year";

export type CardExpirationDate = Record<CardExpirationDateKey, string>;

export type CardPasswordKey = "first" | "second";

export type CardPassword = Record<CardPasswordKey, string>;

export interface Card {
  cardName: string;
  cardCompany: CardCompany;
  cardNumber: CardNumber;
  expirationDate: CardExpirationDate;
  ownerName: string;
  securityCode: string;
  password: CardPassword;
}
