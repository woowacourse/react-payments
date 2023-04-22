export interface CardItemInfo {
  id: number;
  cardNumber: string[];
  expirationDate: string[];
  name: string;
}

export interface Card extends CardItemInfo {
  securityCode: string;
  password: string[];
}
