import { PropsWithChildren, createContext, useContext, useState } from 'react';

import { CardType, CurrentCard } from '../type';

const CurrentCardContext = createContext<CurrentCard | null>(null);

export const CurrentCardProvider = ({ children }: PropsWithChildren) => {
  const [currentCard, setCurrentCard] = useState<Omit<CardType, 'id'>>({
    cardCompany: '카드사 선택',
    cardNumber: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
    cardOwner: '',
    expireMonth: '',
    expireYear: '',
    securityCode: '',
    cardPassword: {
      first: '',
      second: '',
    },
  });

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
