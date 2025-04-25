import { createContext, useState, useContext, ReactNode } from 'react';

interface CardInfo {
  cardNumber: string[];
  cardIssuer: string;
  cardExpirationDate: {
    month: string;
    year: string;
  };
  cardCVC: string;
  cardPassword: string;
}

interface CardInfoContextType {
  cardInfos: CardInfo;
  updateCardInfos: (newCardInfo: CardInfo) => void;
}

const CardInfoContext = createContext<CardInfoContextType | undefined>(undefined);

export const CardInfoProvider = ({ children }: { children: ReactNode }) => {
  const [cardInfos, setCardInfos] = useState<CardInfo>({
    cardNumber: ['', '', '', ''],
    cardIssuer: '',
    cardExpirationDate: { month: '', year: '' },
    cardCVC: '',
    cardPassword: '',
  });

  const updateCardInfos = (newCardInfo: CardInfo) => {
    setCardInfos(newCardInfo);
  };

  return <CardInfoContext.Provider value={{ cardInfos, updateCardInfos }}>{children}</CardInfoContext.Provider>;
};

export const useCardInfoContext = () => {
  const context = useContext(CardInfoContext);
  if (!context) {
    throw new Error('useCardInfoContext must be used within a CardInfoProvider');
  }
  return context;
};
