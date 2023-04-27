import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CardType } from '../types/Card';

const initialState: CardType = {
  id: '',
  cardNumbers: { 0: '', 1: '', 2: '', 3: '' },
  expiredDate: { 0: '', 1: '' },
  cardOwnerName: '',
  cardCompany: '',
};

export const CardContext = createContext<CardState>({
  cards: [],
  card: {
    id: '',
    cardNumbers: { 0: '', 1: '', 2: '', 3: '' },
    expiredDate: { 0: '', 1: '' },
    cardOwnerName: '',
    cardCompany: '',
  },
  setCard: () => {},
  setCards: () => {},
  handleSetCards: () => {},
});

interface CardState {
  card: CardType;
  cards: CardType[];
  setCard: Dispatch<SetStateAction<CardType>>;
  setCards: Dispatch<SetStateAction<CardType[]>>;
  handleSetCards: (
    cardNumbers: Record<number, string>,
    expiredDate: Record<number, string>,
    cardOwnerName: string,
    cardCompany: string
  ) => void;
}

const CardProvider = ({ children }: PropsWithChildren) => {
  const [card, setCard] = useState<CardType>(initialState);
  const [cards, setCards] = useState<CardType[]>([]);

  const handleSetCards = (
    cardNumbers: Record<number, string>,
    expiredDate: Record<number, string>,
    cardOwnerName: string,
    cardCompany: string
  ) => {
    const newCard = {
      id: uuidv4(),
      cardNumbers,
      expiredDate,
      cardOwnerName,
      cardCompany,
    };
    setCard(newCard);
    setCards([...cards, newCard]);
  };

  const state: CardState = {
    card,
    cards,
    setCard,
    setCards,
    handleSetCards,
  };

  return <CardContext.Provider value={state}>{children}</CardContext.Provider>;
};

export default CardProvider;
