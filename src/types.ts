export interface CardBrand {
  name: string;
  color: string;
}

export interface ExpDate {
  month: string;
  year: string;
}

export interface Card {
  cardBrand: CardBrand;
  ownerName: string;
  password: string;
  cardNumber: string;
  expDate: ExpDate;
  CVC: string;
  nickname: string;
  id?: string;
}
