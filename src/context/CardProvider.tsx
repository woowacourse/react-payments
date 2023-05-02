import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';
import { CardType } from '../types/Card';

const initialState: CardType = {
  id: '',
  cardNumbers: { 0: '', 1: '', 2: '', 3: '' },
  expiredDate: { 0: '', 1: '' },
  cardOwnerName: '',
  cardCompany: '카드사',
  nickname: '',
};

export const CardContext = createContext<CardState>({
  cards: [],
  card: {
    id: '',
    cardNumbers: { 0: '', 1: '', 2: '', 3: '' },
    expiredDate: { 0: '', 1: '' },
    cardOwnerName: '',
    cardCompany: '카드사',
    nickname: '',
  },
  setCard: () => {},
  setCards: () => {},
});

interface CardState {
  card: CardType;
  cards: CardType[];
  setCard: Dispatch<SetStateAction<CardType>>;
  setCards: Dispatch<SetStateAction<CardType[]>>;
}

const CardProvider = ({ children }: PropsWithChildren) => {
  const [card, setCard] = useState<CardType>(initialState);
  const [cards, setCards] = useState<CardType[]>([]);

  const state: CardState = {
    card,
    cards,
    setCard,
    setCards,
  };

  return <CardContext.Provider value={state}>{children}</CardContext.Provider>;
};

export default CardProvider;
