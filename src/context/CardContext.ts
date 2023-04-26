import { createContext, useContext } from 'react';

export type Card = {
  id: string;
  cardNumbers: string[];
  cardExpirationDate: string[];
  cardOwner: string[];
  cardCVC: string[];
  cardPWD: string[];
};

export type CardContextState = {
  cardList: Card[];
  setCardList: React.Dispatch<React.SetStateAction<Card[]>>;
};

export const CardContext = createContext<CardContextState | null>(null);

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
