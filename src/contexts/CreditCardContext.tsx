import { createContext } from 'react';
import CreditCardInfo from '../@types/creditCardInfo';

export const CreditCardContext = createContext<
  [
    CreditCardInfo,
    (<T extends keyof CreditCardInfo>(target: T, newValue: CreditCardInfo[T]) => void) | null
  ]
>([
  {
    cardNumber: ['', '', '', ''],
    expirationDate: ['', ''],
    ownerName: '',
    securityCode: '',
    password: ['', ''],
    bank: '현대카드',
  },
  null,
]);
