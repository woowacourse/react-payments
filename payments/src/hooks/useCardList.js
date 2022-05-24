import { useReducer } from "react";

export const CARD_LIST_ACTION = {
  ADD_CARD: "cardList/ADD_CARD",
  REMOVE_CARD: "cardList/REMOVE_CARD",
};

const controlCardList = (state, action) => {
  switch (action.type) {
    case CARD_LIST_ACTION.ADD_CARD:
      return [...state, action.payload];
    case CARD_LIST_ACTION.REMOVE_CARD:
      return [
        ...state.slice(0, action.payload.targetIndex),
        ...state.slice(action.payload.targetIndex + 1),
      ];
    default:
      return state;
  }
};

const initState = JSON.parse(localStorage.getItem("CARD_LIST")) ?? [];

const useCardList = () => {
  const [cardList, updateCardList] = useReducer(controlCardList, initState);

  return { cardList, updateCardList };
};

export default useCardList;
