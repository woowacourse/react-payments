import { createContext, useState } from 'react';
import { Card } from 'components/common/Card/types';

export type CardFormContextType = {
  newCard: Card;
  setNewCard: (card: Card) => void;
  setNewCardName: (cardName: string) => void;
};

export interface ContextProps {
  children: JSX.Element | JSX.Element[];
}

export const defaultCardForm: Card = {
  bank: '현대카드',
  numbers: ['', '', '', ''],
  expirationDate: { year: '', month: '' },
  ownerName: '',
  securityCode: '',
  password: {
    first: '',
    second: '',
  },
};

export const CardFormContext = createContext<CardFormContextType>({
  newCard: defaultCardForm,
  setNewCard: () => {},
  setNewCardName: () => {},
});

export const CardFormProvider = ({ children }: ContextProps) => {
  const [newCard, setNewCard] = useState<Card>(defaultCardForm);

  const updateCard = (card: Card) => {
    setNewCard((prev) => ({
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
    setNewCard((prev) => ({ ...prev, cardName: cardName }));
  };

  return (
    <CardFormContext.Provider
      value={{ newCard, setNewCard: updateCard, setNewCardName: updateCardName }}
    >
      {children}
    </CardFormContext.Provider>
  );
};
