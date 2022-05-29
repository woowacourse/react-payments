import { createContext, useReducer } from "react";
import { REDUCER_TYPE } from "../constants";
import { CardData, CardDataAction } from "../types";

const initialState: CardData[] = [];

export const CardDataContext = createContext<{
  cardData: CardData[];
  dispatch: React.Dispatch<CardDataAction>;
}>({
  cardData: initialState,
  dispatch: () => null,
});

const reducer = (state: CardData[], action: CardDataAction): CardData[] => {
  switch (action.type) {
    case REDUCER_TYPE.CREATE:
      return [...state, action.payload];
    default:
      return state;
  }
};

const CardDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [cardData, dispatch] = useReducer(reducer, initialState);

  return (
    <CardDataContext.Provider value={{ cardData, dispatch }}>
      {children}
    </CardDataContext.Provider>
  );
};

export default CardDataProvider;
