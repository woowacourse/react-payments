import { createContext, useState } from 'react';
import { cardLocalStorage } from '../components/domain/CardLocalStorage';
import type { CardItemInfo } from '../types/Card';

interface CardProviderProps {
  children: React.ReactNode;
}

interface CardContextType {
  cardName: string;
  setCardName: React.Dispatch<React.SetStateAction<string>>;
  bankName: string;
  setBankName: React.Dispatch<React.SetStateAction<string>>;
  cardList: CardItemInfo[];
  setCardList: React.Dispatch<React.SetStateAction<CardItemInfo[]>>;
  card: CardItemInfo;
  setCard: React.Dispatch<React.SetStateAction<CardItemInfo>>;
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
  cardList: [],
  setCardList: () => {},
  card: INIT_STATE,
  setCard: () => {},
});

export const CardContextProvider = ({ children }: CardProviderProps) => {
  const [cardName, setCardName] = useState('');
  const [bankName, setBankName] = useState('기타 은행');
  const [cardList, setCardList] = useState<CardItemInfo[]>(
    cardLocalStorage.getCardList() || []
  );
  const [card, setCard] = useState<CardItemInfo>(INIT_STATE);

  return (
    <CardContext.Provider
      value={{
        cardName,
        setCardName,
        bankName,
        setBankName,
        cardList,
        setCardList,
        card,
        setCard,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
