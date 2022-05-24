import { useReducer } from "react";

const controlCardList = (state, action) => {
  switch (action.type) {
    case "addCardList":
      return [...state, action.payload];
    case "removeCard":
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
