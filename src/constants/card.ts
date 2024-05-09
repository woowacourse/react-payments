import { Card } from '../types/card';

export const DEFAULT_CARD: Card = {
  cardBrand: '',
  cardNumbers: '',
  expiryDate: {
    month: '',
    year: '',
  },
  userName: '',
  cardCompany: '',
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
