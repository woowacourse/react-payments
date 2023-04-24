import { PropsWithChildren, createContext, useContext } from 'react';

import useCards from '../hooks/useCards';
import { noop } from '../../utils/noop';
import type { CardInfo } from '../types/card';

interface CardsContextProps {
  cards: CardInfo[];
  registerCard: (card: CardInfo) => void;
}

const CardsContext = createContext<CardsContextProps>({
  cards: [],
  registerCard: noop,
});

export const CardsProvider = ({ children }: PropsWithChildren) => {
  const { cards, registerCard } = useCards();

  const value = { cards, registerCard };

  return (
    <CardsContext.Provider value={value}>{children}</CardsContext.Provider>
  );
};

export const useCardsContext = () => {
  const context = useContext(CardsContext);

  if (context === undefined) {
    throw new Error('useCardsContext must be used within a CardsProvider');
  }

  return context;
};
