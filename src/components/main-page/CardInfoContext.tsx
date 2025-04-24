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
  resetCardInfo: () => void;
};

const defaultCardNumber: CardNumber = {
  first: '',
  second: '',
  third: '',
  fourth: '',
};

const CardInfoContext = createContext<CardInfoContextType | undefined>(undefined);

export const CardInfoProvider = ({ children }: { children: ReactNode }) => {
  const [cardNumber, setCardNumber] = useState({ first: '', second: '', third: '', fourth: '' });
  const [selectedCardCompany, setSelectedCardCompany] = useState('');

  const resetCardInfo = () => {
    setCardNumber({ first: '', second: '', third: '', fourth: '' });
    setSelectedCardCompany('');
  };

  return (
    <CardInfoContext.Provider
      value={{ cardNumber, setCardNumber, selectedCardCompany, setSelectedCardCompany, resetCardInfo }}
    >
      {children}
    </CardInfoContext.Provider>
  );
};

export function useCardInfo() {
  const context = useContext(CardInfoContext);
  if (!context) {
    throw new Error('useCardInfo는 CardInfoProvider 안에서 사용되어야 합니다.');
  }
  return context;
}
