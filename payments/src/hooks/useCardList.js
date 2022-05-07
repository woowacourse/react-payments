import { useReducer } from "react";

const controllCardList = (state, action) => {
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

const useCardList = () => {
  const [cardList, updateCardList] = useReducer(controllCardList, []);

  return { cardList, updateCardList };
};

export default useCardList;
