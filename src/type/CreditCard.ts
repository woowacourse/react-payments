export interface CreditCard {
  name: string;
  date: string;
  bank?: string;
  number: string[];
  securityCode: number;
  password: number;
};

export const getDefaultCreditCard = (): CreditCard => ({
  name: '',
  date: '',
  number: ['', '', '', ''],
  securityCode: 0,
  password: 0,
});
