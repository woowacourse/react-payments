import { PropsWithChildren, createContext, useContext, useState } from 'react';

import { CardType, CurrentCard } from '../type';
import { CARD_INIT } from '../utils/constants';

const CurrentCardContext = createContext<CurrentCard | null>(null);

export const CurrentCardProvider = ({ children }: PropsWithChildren) => {
  const [currentCard, setCurrentCard] = useState<Omit<CardType, 'id'>>(CARD_INIT);

  return (
    <CurrentCardContext.Provider value={{ currentCard, setCurrentCard }}>
      {children}
    </CurrentCardContext.Provider>
  );
};

export const useCurrentCardContext = () => {
  const currentCardContext = useContext(CurrentCardContext);
  if (currentCardContext === null) {
    throw new Error('Context가 존재하지 않습니다.');
  }
  return currentCardContext;
};
