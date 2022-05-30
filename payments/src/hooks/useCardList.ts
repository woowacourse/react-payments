import React, { useReducer } from "react";
import { CardListAction } from "./type/useCardListAction";

export const CARD_LIST_ACTION = {
  ADD_CARD: "cardList/ADD_CARD",
  REMOVE_CARD: "cardList/REMOVE_CARD",
};

const cardReducer = (state: Card[], action: CardListAction): Card[] => {
  switch (action.type) {
    case CARD_LIST_ACTION.ADD_CARD:
      return [...state, action.payload as Card];
    case CARD_LIST_ACTION.REMOVE_CARD:
      const { targetIndex } = action.payload as { targetIndex: number };
      return [...state.slice(0, targetIndex), ...state.slice(targetIndex + 1)];
    default:
      return state;
  }
};

const initState = JSON.parse(localStorage.getItem("CARD_LIST") ?? "") ?? [];

const useCardList = () => {
  const [cardList, updateCardList] = useReducer<
    React.Reducer<Card[], CardListAction>
  >(cardReducer, initState);

  return { cardList, updateCardList };
};

export default useCardList;
