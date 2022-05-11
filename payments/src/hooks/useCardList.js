import { useReducer } from "react";

const controllCardList = (state, action) => {
  switch (action.type) {
    case "addCardList":
      localStorage.setItem(
        "CARD_LIST",
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    case "removeCard":
      localStorage.setItem(
        "CARD_LIST",
        JSON.stringify([
          ...state.slice(0, action.payload.targetIndex),
          ...state.slice(action.payload.targetIndex + 1),
        ])
      );
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
  const [cardList, updateCardList] = useReducer(controllCardList, initState);

  return { cardList, updateCardList };
};

export default useCardList;
