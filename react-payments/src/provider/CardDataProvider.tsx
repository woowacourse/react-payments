import React, { createContext, useReducer } from "react";
import { REDUCER_TYPE } from "constants/index";
import { AllCardData, CardDataType, WithRequiredProperty } from "types";

export const initCardDataAction = (cardData: AllCardData) => ({
  type: REDUCER_TYPE.INIT,
  payload: cardData,
});

export const editCardDataAction = (
  editedData: WithRequiredProperty<Partial<CardDataType>, "id">
) => ({
  type: REDUCER_TYPE.EDIT,
  payload: editedData,
});

export const deletedCardDataAction = ({ id }: { id: string }) => ({
  type: REDUCER_TYPE.DELETE,
  payload: { id },
});

type CardDataActions =
  | ReturnType<typeof initCardDataAction>
  | ReturnType<typeof editCardDataAction>
  | ReturnType<typeof deletedCardDataAction>;

interface InitialContextValue {
  cardData: AllCardData;
  dispatch: React.Dispatch<CardDataActions>;
}

export const CardDataContext = createContext<InitialContextValue | null>(null);

const initialState = {};

const reducer = (state: AllCardData, action: CardDataActions) => {
  switch (action.type) {
    case REDUCER_TYPE.EDIT: {
      const cards = { ...state };
      const card = cards[action.payload.id];
      cards[action.payload.id] = { ...card, ...action.payload };
      return { ...cards };
    }
    case REDUCER_TYPE.DELETE: {
      const cards = { ...state };
      delete cards[action.payload.id];
      return { ...cards };
    }
    case REDUCER_TYPE.INIT:
      return { ...action.payload };
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
