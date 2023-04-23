export default interface CreditCard {
  name: string;
  date: string;
  bank?: string;
  number: string[];
  securityCode: number;
  password: number;
};
