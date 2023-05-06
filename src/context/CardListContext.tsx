import { createContext, useContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import { LOCAL_STORAGE_KEY } from '../constants';
import type { Card } from '../@types';

export type CardContextState = {
  cardList: Card[];
  setCardList: React.Dispatch<React.SetStateAction<Card[]>>;
};

const CardListContext = createContext<CardContextState | null>(null);

export const useCardState = () => {
  const state = useContext(CardListContext);

  if (!state?.cardList) {
    throw new Error('CardState 가 없습니다!!');
  }

  return state.cardList;
};

export const useCardDispatch = () => {
  const state = useContext(CardListContext);

  if (!state?.setCardList) {
    throw new Error('CardState 가 없습니다!!');
  }

  return state.setCardList;
};

export const CardListProvider = ({ children }: { children: React.ReactNode }) => {
  const [cardList, setCardList] = useState<Card[]>(
    getLocalStorage(LOCAL_STORAGE_KEY.CARD_LIST, []),
  );

  useEffect(() => {
    setLocalStorage(LOCAL_STORAGE_KEY.CARD_LIST, cardList);
  }, [cardList]);

  return (
    <CardListContext.Provider value={{ cardList, setCardList }}>
      {children}
    </CardListContext.Provider>
  );
};
