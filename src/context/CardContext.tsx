import { createContext, useContext, useState } from 'react';
import { getLocalStorage } from '../utils/localStorage';
import { LOCAL_STORAGE_KEY } from '../constants';
import type { Card } from '../types';

export type CardContextState = {
  cardList: Card[];
  setCardList: React.Dispatch<React.SetStateAction<Card[]>>;
};

const CardContext = createContext<CardContextState | null>(null);

export const useCardState = () => {
  const state = useContext(CardContext);

  if (!state?.cardList) {
    throw new Error('CardState 가 없습니다!!');
  }

  return state.cardList;
};

export const useCardDispatch = () => {
  const state = useContext(CardContext);

  if (!state?.setCardList) {
    throw new Error('CardState 가 없습니다!!');
  }

  return state.setCardList;
};

export const CardListProvider = ({ children }: { children: React.ReactNode }) => {
  const [cardList, setCardList] = useState<Card[]>(
    getLocalStorage(LOCAL_STORAGE_KEY.CARD_LIST, []),
  );

  return <CardContext.Provider value={{ cardList, setCardList }}>{children}</CardContext.Provider>;
};
