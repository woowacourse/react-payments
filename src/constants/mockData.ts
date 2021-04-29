import { Card } from '../types';
import { CARD_BRAND } from './addCardForm';

export const CARD_MOCK_DATA: Card[] = [
  {
    cardBrand: CARD_BRAND[0],
    ownerName: 'FANO',
    cardNumber: '1234-1234-1234-1234',
    expDate: {
      month: '3',
      year: '3',
    },
    password: '12',
    CVC: '123',
    nickname: '엄카',
  },
  {
    cardBrand: CARD_BRAND[1],
    ownerName: 'FANO',
    cardNumber: '1234-1234-1234-1234',
    expDate: {
      month: '3',
      year: '3',
    },
    password: '12',
    CVC: '123',
  },
  {
    cardBrand: CARD_BRAND[2],
    ownerName: 'FANO',
    cardNumber: '1234-1234-1234-1234',
    expDate: {
      month: '3',
      year: '3',
    },
    password: '12',
    CVC: '123',
    nickname: '법카',
  },
];
