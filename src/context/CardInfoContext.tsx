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

const CardInfoValueContext = createContext<CardInfo | undefined>(undefined);
const CardInfoActionsContext = createContext<Actions | undefined>(undefined);

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
  const state = useContext(CardInfoValueContext);
  if (!state) throw Error('cannot find Provider');
  return state;
};

export const useCardInfoActions = () => {
  const actions = useContext(CardInfoActionsContext);
  if (!actions?.initCardInfo || !actions?.setCardInfo) throw Error('cannot find Provider');
  return actions;
};
