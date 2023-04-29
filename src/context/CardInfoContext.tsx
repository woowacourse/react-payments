import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';

import { v4 as uuid } from 'uuid';

import { CardInfo } from '../types/card';

interface Actions {
  setCardInfo: Dispatch<SetStateAction<CardInfo>>;
  initCardInfo: () => void;
}

interface Props {
  children: ReactNode;
}

const CardInfoValueContext = createContext<CardInfo>({} as CardInfo);
const CardInfoActionsContext = createContext<Actions>({} as Actions);

export const CardInfoProvider = ({ children }: Props) => {
  const getInit = () => {
    return {
      id: uuid(),
      firstCardNumbers: '',
      secondCardNumbers: '',
      thirdCardNumbers: '',
      fourthCardNumbers: '',
      expirationMonth: '',
      expirationYear: '',
      ownerName: '',
      securityNumbers: '',
      firstPassword: '',
      secondPassword: '',
      bank: '',
      nickname: '',
    };
  };

  const [cardInfo, setCardInfo] = useState(getInit());

  const actions = useMemo(
    () => ({
      setCardInfo,

      initCardInfo() {
        setCardInfo(getInit());
      },
    }),
    []
  );

  return (
    <CardInfoActionsContext.Provider value={actions}>
      <CardInfoValueContext.Provider value={cardInfo}>{children}</CardInfoValueContext.Provider>
    </CardInfoActionsContext.Provider>
  );
};

export const useCardInfoValue = () => {
  return useContext(CardInfoValueContext);
};

export const useCardInfoActions = () => {
  return useContext(CardInfoActionsContext);
};
