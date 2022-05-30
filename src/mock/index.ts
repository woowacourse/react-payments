import { CardObject } from './types';

export const initialCardObject: Array<CardObject> = [
  {
    id: 1,
    nickName: 'ddd',
    ownerName: 'wooyeon',
    cardType: {
      color: 'red',
      name: '포코 카드',
    },
    cardNumber: ['1111', '2222', '3333', '4444'],
    expiredDate: {
      expiredMonth: '02',
      expiredYear: '24',
    },
    secureCode: '123',
    password: ['1', '2'],
  },
];
