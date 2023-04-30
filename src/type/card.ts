import { CardNumberIndex } from "./input";

export interface CardColor {
  bgColor: string;
  fontColor: string;
}

export interface CardInfo {
  cardNumber: CardNumberIndex;
  month: string;
  year: string;
  userName: string;
  cardColor: CardColor;
  bank: string;
  nickname?: string;
}
