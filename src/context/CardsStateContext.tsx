import { createContext, FC, useContext, useEffect, useState } from 'react';
import { requestAddCard, requestCards, requestEditNickname, requestDeleteCard } from '../service/card';
import { Card, CardForSubmit } from '../types';
import { DocumentReference, DocumentData } from '@firebase/firestore-types';

interface State {
  cards: Card[];
  addCard: (card: CardForSubmit) => Promise<string>;
  editNickname: (nickname: string, id: string) => void;
  deleteCard: (id: string) => void;
}

const CardsStateContext = createContext<State | null>(null);

interface Props {
  children: React.ReactNode;
}

const CardsStateProvider: FC<Props> = ({ children }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [shouldUpdate, setShouldUpdate] = useState(false);

  const updateCards = () => {
    setShouldUpdate(!shouldUpdate);
  };

  const addCard = async (card: CardForSubmit) => {
    let docId = '';

    try {
      const { id } = await requestAddCard(card);

      docId = id;
      updateCards();
    } catch (error) {
      // TODO: error 표시 + 이전 뎁스로 이동
    }

    return docId;
  };

  const deleteCard = async (id: string) => {
    await requestDeleteCard(id);
    updateCards();
  };

  const editNickname = async (nickname: string, id: string) => {
    try {
      await requestEditNickname(nickname, id);
      updateCards();
    } catch (error) {
      // TODO: error 핸들링
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const cards = await requestCards();
        setCards(cards);
      } catch (error) {
        //TODO: error 표시 + 앱이 아예 동작안하게?
      }
    })();
  }, [shouldUpdate]);

  const value = { cards, addCard, editNickname, deleteCard };

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
