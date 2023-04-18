export interface Card {
  id: number;
  cardNumber: {
    first: number;
    second: number;
    third: number;
    fourth: number;
  };
  expirationDate: {
    month: string;
    year: string;
  };
  name: string;
  securityCode: number;
  password: number;
}
