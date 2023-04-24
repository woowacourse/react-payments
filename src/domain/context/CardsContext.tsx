import { PropsWithChildren, createContext, useContext } from 'react';

import useCards from '../hooks/useCards';
import { noop } from '../../utils/noop';
import type { CardInfo } from '../types/card';

interface CardsContextProps {
  cards: CardInfo[];
  lastRegisteredCard: CardInfo | null;
  registerCard: (card: CardInfo) => void;
  modifyLastCardNickname: (card: CardInfo, nickname: string) => void;
}

const CardsContext = createContext<CardsContextProps>({
  cards: [],
  lastRegisteredCard: null,
  registerCard: noop,
  modifyLastCardNickname: noop,
});

export const CardsProvider = ({ children }: PropsWithChildren) => {
  const { cards, lastRegisteredCard, registerCard, modifyLastCardNickname } =
    useCards();

  const value = {
    cards,
    lastRegisteredCard,
    registerCard,
    modifyLastCardNickname,
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
