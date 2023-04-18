export interface Card {
  id: number;
  cardNumber: {
    first: number;
    second: number;
    third: number;
    fourth: number;
  };
  expirationDate: {
    month: number;
    year: number;
  };
  name: string;
  securityCode: number;
  password: number;
}
