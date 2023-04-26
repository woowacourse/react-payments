import { createContext, useContext, useState } from 'react';
import useList from '../utils/useList';
import { CardType } from '../types';

interface CardFormValues extends Omit<CardType, 'id'> {}

interface CardFormActions {
  setCardCompany: (cardCompany: string) => void;
  setCardNumberIndex: (index: number) => (value: string) => void;
  setExpireDateIndex: (index: number) => (value: string) => void;
  setOwnerName: (cardCompany: string) => void;
  setSecurityCode: (cardCompany: string) => void;
  setCardPasswordIndex: (index: number) => (value: string) => void;
  setCardName: (cardCompany: string) => void;
}

interface CardFormProviderProps {
  children: React.ReactNode;
}

const CardFormContext = createContext<readonly [CardFormValues, CardFormActions] | null>(null);

export const useCardForm = (): readonly [CardFormValues, CardFormActions] => {
  const context = useContext(CardFormContext);
  if (context === null) throw new Error('context is null');
  return context;
};
export const CardFormProvider = ({ children }: CardFormProviderProps) => {
  const [cardCompany, setCardCompany] = useState('');
  const [cardNumber, setCardNumberIndex] = useList(['', '', '', '']);
  const [expireDate, setExpireDateIndex] = useList(['', '']);
  const [ownerName, setOwnerName] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cardPassword, setCardPasswordIndex] = useList(['', '']);
  const [cardName, setCardName] = useState('');

  const values = {
    cardCompany,
    cardNumber,
    expireDate,
    ownerName,
    securityCode,
    cardPassword,
    cardName,
  };

  const actions = {
    setCardCompany,
    setCardNumberIndex,
    setExpireDateIndex,
    setOwnerName,
    setSecurityCode,
    setCardPasswordIndex,
    setCardName,
  };

  return <CardFormContext.Provider value={[values, actions] as const}>{children}</CardFormContext.Provider>;
};
