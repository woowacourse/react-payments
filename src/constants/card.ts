import { Card } from '../types/card';

export const DEFAULT_CARD: Card = {
  cardNumbers: {
    cardNumber1: '',
    cardNumber2: '',
    cardNumber3: '',
    cardNumber4: '',
  },
  expiryDate: {
    month: '',
    year: '',
  },
  userName: '',
  cardCompany: {
    name: '',
    color: '',
  },
  cvc: '',
  password: '',
};

export const DEFAULT_CARD_BOOLEAN: Record<string, boolean> = {
  cardNumbers: false,
  cardCompany: false,
  expiryDate: false,
  userName: false,
  cvc: false,
  password: false,
};
