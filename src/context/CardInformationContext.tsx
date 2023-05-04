import { createContext, useState } from 'react';
import { Card, CardCompany, SetState } from '../@types';

const initialValue: Card = {
  id: '',
  cardName: '',
  cardCompany: '',
  cardNumbers: {
    first: '',
    second: '',
    third: '',
    fourth: '',
  },
  cardExpirationDate: { month: '', year: '' },
  cardOwner: '',
  cardCVC: '',
  cardPWD: { first: '', second: '' },
};

type CardInformationActions = {
  setCardNumbers: SetState;
  setCardExpirationDate: SetState;
  setCardOwner: SetState;
  setCardCVC: SetState;
  setCardPWD: SetState;
  setCardCompany: SetState;
  setCardName: SetState;
};

type CardInformationContextState = {
  cardInformation: Card;
  CardInformationActions: CardInformationActions;
};

export const CardInformationContext = createContext<CardInformationContextState>(
  {} as CardInformationContextState,
);

export const CardInformationProvider = ({ children }: { children: React.ReactNode }) => {
  const [cardInformation, setCardInformation] = useState<Card>(initialValue);

  const CardInformationActions: CardInformationActions = {
    setCardNumbers: (value: string, key?: string) => {
      if (!key) return;
      setCardInformation((prev) => ({
        ...prev,
        cardNumbers: { ...prev.cardNumbers, [key]: value },
      }));
    },
    setCardExpirationDate: (value: string, key?: string) => {
      if (!key) return;

      setCardInformation((prev) => ({
        ...prev,
        cardExpirationDate: { ...prev.cardExpirationDate, [key]: value },
      }));
    },
    setCardOwner: (value: string) => {
      setCardInformation((prev) => ({
        ...prev,
        cardOwner: value,
      }));
    },
    setCardCVC: (value: string) => {
      setCardInformation((prev) => ({
        ...prev,
        cardCVC: value,
      }));
    },
    setCardPWD: (value: string, key?: string) => {
      if (!key) return;

      setCardInformation((prev) => ({
        ...prev,
        cardPWD: { ...prev.cardPWD, [key]: value },
      }));
    },
    setCardCompany: (value: CardCompany) => {
      setCardInformation((prev) => ({
        ...prev,
        cardCompany: value,
      }));
    },
    setCardName: (value: string) => {
      setCardInformation((prev) => ({
        ...prev,
        cardName: value,
      }));
    },
  };

  return (
    <CardInformationContext.Provider value={{ cardInformation, CardInformationActions }}>
      {children}
    </CardInformationContext.Provider>
  );
};
