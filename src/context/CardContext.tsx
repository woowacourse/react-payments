import { createContext, useState } from 'react';
import { useCardList } from '../hooks/useCardList';
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
  updateCardList: (cardItem: CardItemInfo) => void;
}

const INIT_STATE = {
  id: 0,
  cardNumber: ['', '', '', ''],
  expirationDate: ['', ''],
  name: '',
  bankName: '',
  cardName: '',
};

export const CardContext = createContext<CardContextType>({
  cardName: '',
  setCardName: () => {},
  bankName: '',
  setBankName: () => {},
  card: INIT_STATE,
  setCard: () => {},
  updateCardList: () => {},
});

export const CardContextProvider = ({ children }: CardProviderProps) => {
  const [cardName, setCardName] = useState('');
  const [bankName, setBankName] = useState('기타 은행');
  const [card, setCard] = useState<CardItemInfo>(INIT_STATE);

  const { updateCardList } = useCardList();

  return (
    <CardContext.Provider
      value={{
        cardName,
        setCardName,
        bankName,
        setBankName,
        updateCardList,
        card,
        setCard,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
