export type Company =
  | "BC카드"
  | "신한카드"
  | "카카오뱅크"
  | "현대카드"
  | "우리카드"
  | "롯데카드"
  | "하나카드"
  | "국민카드"
  | "";

export interface CardPublicInfo {
  id: number;
  cardNumber: string[];
  expirationDate: string[];
  name: string;
  company: Company;
  nickName?: string;
}

export interface CardPrivateInfo extends CardPublicInfo {
  securityCode: string;
  password: string;
}
