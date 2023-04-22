import React, { createContext } from 'react';
import CreditCardInfo from '../@types/creditCardInfo';

const CreditCardContext = createContext<
  [CreditCardInfo, React.Dispatch<React.SetStateAction<CreditCardInfo>> | null]
>([
  {
    cardNumber: '',
    expirationDate: ['', ''],
    ownerName: '',
    securityCode: '',
    password: '',
    bank: '현대카드',
  },
  null,
]);

export default CreditCardContext;
