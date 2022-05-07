import { useReducer } from "react";

const controllCardList = (state, action) => {
  switch (action.type) {
    case "addCardList":
      return [...state, action.payload];
    default:
      return state;
  }
};

const useCardList = () => {
  const [cardList, updateCardList] = useReducer(controllCardList, []);

  return { cardList, updateCardList };
};

export default useCardList;
