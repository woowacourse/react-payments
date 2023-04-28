import { createContext, useState } from 'react';
import { Card } from 'components/common/Card/types';

export type CardFormContextType = {
  cardForm: Card;
  setCardForm: (card: Card) => void;
  setCardFormName: (cardName: string) => void;
};

export interface ContextProps {
  children: JSX.Element | JSX.Element[];
}

export const defaultCardForm: Card = {
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

export const CardFormContext = createContext<CardFormContextType>({
  cardForm: defaultCardForm,
  setCardForm: () => {},
  setCardFormName: () => {},
});

export const CardFormProvider = ({ children }: ContextProps) => {
  const [cardForm, setCardForm] = useState<Card>(defaultCardForm);

  const updateCard = (card: Card) => {
    setCardForm((prev) => ({
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
    setCardForm((prev) => ({ ...prev, cardName: cardName }));
  };

  return (
    <CardFormContext.Provider
      value={{ cardForm, setCardForm: updateCard, setCardFormName: updateCardName }}
    >
      {children}
    </CardFormContext.Provider>
  );
};
