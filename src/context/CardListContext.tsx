import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import handleLocalStorage from '../utils/handleLocalStorage';

import { CardInfo } from '../types/card';

interface Actions {
  setCardList: Dispatch<SetStateAction<CardInfo[]>>;
}

interface Props {
  children: ReactNode;
}

const CardListValueContext = createContext<CardInfo[]>([]);
const CardListActionsContext = createContext<Actions | undefined>(undefined);

export const CardListProvider = ({ children }: Props) => {
  const [localData, setLocalData] = handleLocalStorage('react-payments-card-info');
  const [cardList, setCardList] = useState(localData);

  useEffect(() => {
    setLocalData(cardList);
  }, [cardList, setLocalData]);

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
