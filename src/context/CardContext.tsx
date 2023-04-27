import { createContext, useState } from 'react';
import type { CardItemInfo } from '../types/Card';

interface CardProviderProps {
  children: React.ReactNode;
}

interface CardContextType {
  cardName: string;
  setCardName: React.Dispatch<React.SetStateAction<string>>;
  bankName: string;
  setBankName: React.Dispatch<React.SetStateAction<string>>;
  card: CardItemInfo;
  setCard: React.Dispatch<React.SetStateAction<CardItemInfo>>;
}

export const CardContext = createContext<CardContextType>({
  cardName: '',
  setCardName: () => {},
  bankName: '',
  setBankName: () => {},
  card: {
    id: 0,
    cardNumber: ['', '', '', ''],
    expirationDate: ['', ''],
    name: '',
    bankName: '',
    cardName: '',
  },
  setCard: () => {},
});

export const CardContextProvider = ({ children }: CardProviderProps) => {
  const [cardName, setCardName] = useState('');
  const [bankName, setBankName] = useState('기타 은행');
  const [card, setCard] = useState<CardItemInfo>({
    id: 0,
    cardNumber: ['', '', '', ''],
    expirationDate: ['', ''],
    name: '',
    bankName: '',
    cardName: '',
  });

  return (
    <CardContext.Provider
      value={{
        cardName,
        setCardName,
        bankName,
        setBankName,
        card,
        setCard,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
