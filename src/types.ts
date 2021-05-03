export interface CardBrand {
  name: string;
  color: string;
}

export interface ExpDate {
  month: string;
  year: string;
}

export interface Card {
  id: string;
  createdAt: string;
  cardBrand: CardBrand;
  ownerName: string;
  password: string;
  cardNumber: string;
  expDate: ExpDate;
  CVC: string;
  nickname: string;
}

export type CardForSubmit = Omit<Card, 'id' | 'createdAt'>;
