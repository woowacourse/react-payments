import { createContext, useState } from 'react';
import { Card } from 'components/common/Card/types';

export type CardInfoContextType = {
  cardInfo: Card;
  setCardInfo: (card: Card) => void;
  setCardInfoName: (cardName: string) => void;
};

export interface ContextProps {
  children: JSX.Element | JSX.Element[];
}

export const defaultCardInfo: Card = {
  bank: '현대카드',
  numbers: ['', '', '', ''],
  expirationDate: { month: '', year: '' },
  ownerName: '',
  securityCode: '',
  password: {
    first: '',
    second: '',
  },
};

export const CardInfoContext = createContext<CardInfoContextType>({
  cardInfo: defaultCardInfo,
  setCardInfo: () => {},
  setCardInfoName: () => {},
});

export const CardInfoProvider = ({ children }: ContextProps) => {
  const [cardInfo, setCardInfo] = useState<Card>(defaultCardInfo);

  const updateCard = (card: Card) => {
    setCardInfo((prev) => ({
      ...prev,
      bank: card.bank,
      numbers: card.numbers,
      expirationDate: card.expirationDate,
      ownerName: card.ownerName,
      securityCode: card.securityCode,
      password: card.password,
    }));
  };

  const updateCardName = (cardName: string) => {
    setCardInfo((prev) => ({ ...prev, cardName: cardName }));
  };

  return (
    <CardInfoContext.Provider
      value={{ cardInfo, setCardInfo: updateCard, setCardInfoName: updateCardName }}
    >
      {children}
    </CardInfoContext.Provider>
  );
};
