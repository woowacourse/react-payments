import { createContext, FC, useContext, useEffect, useState } from 'react';
import { requestAddCard, requestCards, requestEditNickname, requestDeleteCard } from '../service/card';
import { Card, CardForSubmit } from '../types';
import { DocumentReference, DocumentData } from '@firebase/firestore-types';

interface State {
  cards: Card[];
  addCard: (card: CardForSubmit) => Promise<string>;
  editNickname: (nickname: string, id: string) => void;
  deleteCard: (id: string) => void;
  hasError: boolean;
}

const CardsStateContext = createContext<State | null>(null);

interface Props {
  children: React.ReactNode;
}

const CardsStateProvider: FC<Props> = ({ children }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [hasError, setHasError] = useState(false);

  const updateCards = () => {
    setShouldUpdate(!shouldUpdate);
  };

  const addCard = async (card: CardForSubmit) => {
    setHasError(false);

    try {
      const { id } = await requestAddCard(card);

      updateCards();
      return id;
    } catch (error) {
      setHasError(true);
      return '';
    }
  };

  const deleteCard = async (id: string) => {
    setHasError(false);

    try {
      await requestDeleteCard(id);
      updateCards();
    } catch (error) {
      setHasError(true);
    }
  };

  const editNickname = async (nickname: string, id: string) => {
    setHasError(false);

    try {
      await requestEditNickname(nickname, id);
      updateCards();
    } catch (error) {
      setHasError(true);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const cards = await requestCards();
        setCards(cards);
      } catch (error) {
        setHasError(true);
        setCards([]);
      }
    })();
  }, [shouldUpdate]);

  const value = { cards, addCard, editNickname, deleteCard, hasError };

  return <CardsStateContext.Provider value={value}>{children}</CardsStateContext.Provider>;
};

const useCards = () => {
  const context = useContext(CardsStateContext);

  if (!context) {
    throw new Error('Invalid Component: useCards must be used in a CardsStateProvider');
  }

  return context;
};

export { CardsStateContext, CardsStateProvider, useCards };
