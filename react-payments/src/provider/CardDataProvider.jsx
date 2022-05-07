import { createContext, useReducer } from "react";
import { REDUCER_TYPE } from "../constants";

export const CardDataContext = createContext();

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case REDUCER_TYPE.CREATE:
      return [...state, action.payload];
    case REDUCER_TYPE.EDIT: {
      const cards = [...state];
      const card = cards[action.payload.id];
      cards.splice(action.payload.id, 1, { ...card, ...action.payload });
      return [...cards];
    }
    case REDUCER_TYPE.DELETE: {
      const cards = [...state];
      cards.splice(action.payload.id, 1);
      return [...cards];
    }
    default:
      return state;
  }
};

const CardDataProvider = ({ children }) => {
  const [cardData, dispatch] = useReducer(reducer, initialState);

  return (
    <CardDataContext.Provider value={{ cardData, dispatch }}>
      {children}
    </CardDataContext.Provider>
  );
};

export default CardDataProvider;
