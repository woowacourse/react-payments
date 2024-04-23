export type CardCompany = "" | "BC카드" | "신한카드" | "카카오뱅크" | "현대카드" | "우리카드" | "롯데카드" | "하나카드" | "국민카드";

export interface CardInfo {
  password: number;
  cvc: number;
  userName: string;
  cardExpiration: number[];
  cardCompany: CardCompany;
  cardNumbers: number[];
}
