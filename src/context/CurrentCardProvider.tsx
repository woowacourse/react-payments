import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

import { CardType } from '../type';

// TODO: 타입 분리
type CurrentCard = {
  currentCard: Omit<CardType, 'id'>;
  setCurrentCard: Dispatch<SetStateAction<Omit<CardType, 'id'>>>;
};

const CurrentCardContext = createContext<CurrentCard | null>(null);

export const CurrentCardProvider = ({ children }: PropsWithChildren) => {
  const [currentCard, setCurrentCard] = useState<Omit<CardType, 'id'>>({
    cardCompany: '',
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
