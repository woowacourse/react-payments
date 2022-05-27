import React, { useReducer } from "react";
import type { CardNumbers, Month, Reducer } from "types";

interface CardState {
  id: number;
  cardCompany: {
    name: string;
    hexColor: string;
  };
  cardNumbers: CardNumbers;
  cardDate: {
    month: Month;
    year: string;
  };
  owner: {
    name: string;
  };
  nickname: string;
}

type CardListState = CardState[];
type CardListAction = {
  type: "ADD_CARD_ITEM";
  card: CardState;
};

interface CardListProviderProps {
  children: React.ReactNode;
  initialState?: CardListState;
}

const CardListContext = React.createContext<CardListState | null>(null);
const CardListDispatchContext =
  React.createContext<React.Dispatch<CardListAction> | null>(null);

const initialCardListState = [];
const cardListReducer: Reducer<CardListState, CardListAction> = (
  state,
  action
) => {
  switch (action.type) {
    case "ADD_CARD_ITEM":
      return [...state, action.card];
    default:
      return state;
  }
};

const CardListProvider = ({
  children,
  initialState,
}: CardListProviderProps) => {
  const [cardList, cardListDispatch] = useReducer(
    cardListReducer,
    initialState ?? initialCardListState
  );

  return (
    <CardListContext.Provider value={cardList}>
      <CardListDispatchContext.Provider value={cardListDispatch}>
        {children}
      </CardListDispatchContext.Provider>
    </CardListContext.Provider>
  );
};

export { CardListContext, CardListDispatchContext, CardListProvider };
