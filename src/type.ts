export interface CreditCard {
  bank?: string;
  cardNumber: number[];
  expirationDate: string;
  owner: string;
  securityCode: string;
  password: number[];
}

export interface EachUserInputState {
  isComplete: boolean;
  userInput: string | string[];
}

export type nowStatus = 0 | 1 | 2;

export interface InputStatus {
  bank?: EachUserInputState;
  cardNumber: EachUserInputState;
  expirationDate: EachUserInputState;
  owner: EachUserInputState;
  securityCode: EachUserInputState;
  password: EachUserInputState;
}

export type Bank =
  | "woori"
  | "lotte"
  | "hana"
  | "kb"
  | "kakao"
  | "bc"
  | "shinhan"
  | "hyundai";
