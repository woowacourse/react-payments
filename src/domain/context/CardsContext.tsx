import { PropsWithChildren, createContext, useContext } from 'react';

import useCards from '../hooks/useCards';
import { noop } from '../../utils/noop';
import type { CardInfo } from '../types/card';

interface CardsContextProps {
  cards: CardInfo[];
  registerCard: (card: CardInfo) => void;
  modifyCardNickname: (id: string, nickname: string) => void;
}

const CardsContext = createContext<CardsContextProps>({
  cards: [],
  registerCard: noop,
  modifyCardNickname: noop,
});

export const CardsProvider = ({ children }: PropsWithChildren) => {
  const { cards, registerCard, modifyCardNickname } = useCards();

  const value = {
    cards,
    registerCard,
    modifyCardNickname,
  };

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
