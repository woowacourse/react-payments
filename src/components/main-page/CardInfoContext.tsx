import { createContext, useContext, useState, ReactNode } from 'react';
import { Position } from '../../types/index.types';

type CardNumber = {
  [key in Position]: string;
};

type CardInfoContextType = {
  cardNumber: CardNumber;
  selectedCardCompany: string;
  setCardNumber: (cardNumber: CardNumber) => void;
  setSelectedCardCompany: (company: string) => void;
};

const defaultCardNumber: CardNumber = {
  first: '',
  second: '',
  third: '',
  fourth: '',
};

const CardInfoContext = createContext<CardInfoContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export function CardInfoProvider({ children }: Props) {
  const [cardNumber, setCardNumber] = useState<CardNumber>(defaultCardNumber);
  const [selectedCardCompany, setSelectedCardCompany] = useState('');

  return (
    <CardInfoContext.Provider
      value={{
        cardNumber,
        selectedCardCompany,
        setCardNumber,
        setSelectedCardCompany,
      }}
    >
      {children}
    </CardInfoContext.Provider>
  );
}

export function useCardInfo() {
  const context = useContext(CardInfoContext);
  if (!context) {
    throw new Error('useCardInfo는 CardInfoProvider 안에서 사용되어야 합니다.');
  }
  return context;
}
