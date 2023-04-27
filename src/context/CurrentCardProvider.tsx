import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { CardType } from '../type';

type CurrentCard = {
  currentCard: Omit<CardType, 'id'>;
  setCurrentCard: Dispatch<SetStateAction<Omit<CardType, 'id'>>>;
};

const CurrentCardContext = createContext<CurrentCard | null>(null);

export const CurrentCardProvider = ({ children }: PropsWithChildren) => {
  const [currentCard, setCurrentCard] = useState<Omit<CardType, 'id'>>({
    cardType: '',
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
  const toggleContext = useContext(CurrentCardContext);
  if (toggleContext === null) {
    throw new Error('Context가 존재하지 않습니다.');
  }
  return toggleContext;
};
