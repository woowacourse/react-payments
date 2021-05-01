import { createContext, FC, useContext, useEffect, useState } from 'react';
import { requestCards } from '../service/APIRequest';
import { Card } from '../types';

interface State {
  cards: Card[];
  // addCard: () => {};
}

const CardsStateContext = createContext<State | null>(null);

interface Props {
  children: React.ReactNode;
}

const CardsStateProvider: FC<Props> = ({ children }) => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const cards = await requestCards();
        setCards(cards);
      } catch (error) {
        //TODO: error 표시 + 앱이 아예 동작안하게?
      }
    })();
  }, []);

  const value = { cards };

  return <CardsStateContext.Provider value={value}>{children}</CardsStateContext.Provider>;
};

const useCards = () => {
  const context = useContext(CardsStateContext);

  if (!context) {
    throw new Error('Invalid Component: useCards must be used in a CardsStateProvider');
  }

  return context;
};

export { CardsStateProvider, useCards };
