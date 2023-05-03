import { createContext, ReactNode, SetStateAction, useContext, useMemo } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

import { CardInfo } from '../types/card';

interface Actions {
  setCardList: (param: SetStateAction<CardInfo[]> | CardInfo[]) => void;
}

interface Props {
  children: ReactNode;
}

const CardListValueContext = createContext<CardInfo[]>([]);
const CardListActionsContext = createContext<Actions | undefined>(undefined);

export const CardListProvider = ({ children }: Props) => {
  const [cardList, setCardList] = useLocalStorage<CardInfo[]>('react-payments-card-info', []);

  const actions = useMemo(
    () => ({
      setCardList,
    }),
    [setCardList]
  );

  return (
    <CardListActionsContext.Provider value={actions}>
      <CardListValueContext.Provider value={cardList}>{children}</CardListValueContext.Provider>
    </CardListActionsContext.Provider>
  );
};

export const useCardListValue = () => {
  const state = useContext(CardListValueContext);
  if (!state) throw Error('cannot find Provider');
  return state;
};

export const useCardListActions = () => {
  const actions = useContext(CardListActionsContext);
  if (!actions?.setCardList) throw Error('cannot find Provider');
  return actions;
};
