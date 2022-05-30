import React, { useReducer } from "react";
import type { CardInfoActionType, CardInfoState, Reducer } from "types";

type CardInfoAction = {
  type: CardInfoActionType;
} & Partial<CardInfoState>;

interface CardInfoProviderProps {
  children: React.ReactNode;
  initialState?: CardInfoState;
}

const initialCardInfoState: CardInfoState = {
  cardCompany: {
    name: "",
    hexColor: "#ffffff",
  },
  cardNumbers: {
    cardNoA: "",
    cardNoB: "",
    cardNoC: "",
    cardNoD: "",
  },
  cardDate: {
    month: "",
    year: "",
  },
  owner: {
    name: "",
  },
  cardCode: {
    cvc: "",
  },
  pwd: {
    pwdNoA: "",
    pwdNoB: "",
  },
};

const cardInfoReducer: Reducer<CardInfoState, CardInfoAction> = (
  state,
  action
) => {
  switch (action.type) {
    case "UPDATE_COMPANY":
      return {
        ...state,
        cardCompany: action.cardCompany,
      };
    case "UPDATE_NUMBERS":
      return {
        ...state,
        cardNumbers: action.cardNumbers,
      };
    case "UPDATE_DATE":
      return {
        ...state,
        cardDate: action.cardDate,
      };
    case "UPDATE_OWNER":
      return {
        ...state,
        owner: action.owner,
      };
    case "UPDATE_CARD_CODE":
      return {
        ...state,
        cardCode: action.cardCode,
      };
    case "UPDATE_PWD":
      return {
        ...state,
        pwd: action.pwd,
      };
    case "RESET_CARD_INFO":
      return { ...initialCardInfoState };
    default:
      return state;
  }
};

const CardInfoContext = React.createContext<CardInfoState | null>(null);
const CardInfoDispatchContext =
  React.createContext<React.Dispatch<CardInfoAction> | null>(null);

const CardInfoProvider = ({
  children,
  initialState,
}: CardInfoProviderProps) => {
  const [cardInfo, cardInfoDispatch] = useReducer(
    cardInfoReducer,
    initialState ?? initialCardInfoState
  );

  return (
    <CardInfoContext.Provider value={cardInfo}>
      <CardInfoDispatchContext.Provider value={cardInfoDispatch}>
        {children}
      </CardInfoDispatchContext.Provider>
    </CardInfoContext.Provider>
  );
};

export { CardInfoContext, CardInfoDispatchContext, CardInfoProvider };
