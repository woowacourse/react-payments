export interface CardType {
  id: number;
  cardCompany: string;
  cardNumber: string[];
  expireDate: string[];
  ownerName: string;
  securityCode: string;
  cardPassword: string[];
  cardName: string;
}

export enum Page {
  list = 'list',
  register = 'register',
  name = 'name',
}
