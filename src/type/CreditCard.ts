export default interface CreditCard {
  name: string;
  date: string;
  bank?: string;
  number: number[];
  securityCode: number;
  password: number;
};
