import { createContext } from 'react';

interface CardInfoContextType {
  cardInfo: CardInfo;
  changeCardInfo: (cardInfo: Partial<CardInfo>) => void;
}

export const initialCardInfoContext: CardInfoContextType = {
  cardInfo: {
    cardCompany: null,
    cardNumber: ['', '', '', ''],
    expirationMonth: '',
    expirationYear: '',
    name: '',
    cvc: '',
    password: '',
  },
  changeCardInfo: () => {},
};

export const CardInfoContext = createContext<CardInfoContextType>(
  initialCardInfoContext,
);
