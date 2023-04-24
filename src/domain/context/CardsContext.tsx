import { PropsWithChildren, createContext, useContext } from 'react';

import useCards from '../hooks/useCards';
import { noop } from '../../utils/noop';
import type { CardInfo } from '../types/card';

interface CardsContextProps {
  cards: CardInfo[];
  lastRegisteredCard: CardInfo | null;
  registerCard: (card: CardInfo) => void;
  modifyCardNickname: (card: CardInfo, nickname: string) => void;
}

const CardsContext = createContext<CardsContextProps>({
  cards: [],
  lastRegisteredCard: null,
  registerCard: noop,
  modifyCardNickname: noop,
});

export const CardsProvider = ({ children }: PropsWithChildren) => {
  const { cards, lastRegisteredCard, registerCard, modifyCardNickname } =
    useCards();

  const value = {
    cards,
    lastRegisteredCard,
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
