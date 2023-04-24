export interface CardType {
  id: number;
  cardNumber: string[];
  expireDate: string[];
  ownerName: string;
  securityCode: string;
  cardPassword: string[];
}

export enum Page {
  list = 'list',
  register = 'register',
}
