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

const CardListValueContext = createContext<CardInfo[]>([] as CardInfo[]);
const CardListActionsContext = createContext<Actions>({} as Actions);

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
  return useContext(CardListValueContext);
};

export const useCardListActions = () => {
  return useContext(CardListActionsContext);
};
