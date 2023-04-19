export interface Card {
  id: number;
  cardNumber: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  expirationDate: {
    month: string;
    year: string;
  };
  name: string;
  securityCode: string;
  password: string;
}
