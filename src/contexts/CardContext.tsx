import React, { Dispatch, createContext, useContext, useReducer } from "react";
import { CreditCard, CREDIT_CARD_COMPANY } from "../types/card";

type Action =
  | { type: "SET_ORIGIN_NUMBER"; originNumber: string }
  | { type: "SET_DISPLAY_NUMBER"; displayNumber: string }
  | { type: "SET_CARD_DATE"; cardDate: string }
  | { type: "SET_CARD_OWNER_NAME"; cardOwnerName: string }
  | { type: "SET_CARD_CVC"; cardCVC: string }
  | { type: "SET_PASSWORD"; cardPassword: [string, string] }
  | { type: "SET_CARD_COMPANY"; cardCompany: CREDIT_CARD_COMPANY | null }
  | { type: "SET_CARD_ALIAS"; cardAlias: string }
  | { type: "RESET" };

type CardDispatch = Dispatch<Action>;

const initialState: CreditCard = {
  originNumber: "",
  displayNumber: "",
  cardDate: "",
  cardOwnerName: "",
  cardCVC: "",
  cardPassword: ["", ""],
  cardCompany: null,
};

export const CardContext = createContext<CreditCard | null>(null);
export const CardDispatchContext = createContext<CardDispatch | null>(null);

function cardReducer(state: CreditCard, action: Action): CreditCard {
  switch (action.type) {
    case "SET_ORIGIN_NUMBER":
      return {
        ...state,
        originNumber: action.originNumber,
      };
    case "SET_DISPLAY_NUMBER":
      return {
        ...state,
        displayNumber: action.displayNumber,
      };
    case "SET_CARD_DATE":
      return {
        ...state,
        cardDate: action.cardDate,
      };
    case "SET_CARD_OWNER_NAME":
      return {
        ...state,
        cardOwnerName: action.cardOwnerName,
      };
    case "SET_CARD_CVC":
      return {
        ...state,
        cardCVC: action.cardCVC,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        cardPassword: action.cardPassword,
      };
    case "SET_CARD_COMPANY":
      return {
        ...state,
        cardCompany: action.cardCompany,
      };
    case "SET_CARD_ALIAS":
      return {
        ...state,
        cardAlias: action.cardAlias,
      };
    case "RESET":
      return initialState;
  }
}

export function CardProvier({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cardReducer, initialState);

  return (
    <CardContext.Provider value={state}>
      <CardDispatchContext.Provider value={dispatch}>
        {children}
      </CardDispatchContext.Provider>
    </CardContext.Provider>
  );
}

export function useCardState() {
  const state = useContext(CardContext);

  if (!state) throw new Error("Can't find CardContext");

  return state;
}

export function useCardDispatch() {
  const dispatch = useContext(CardDispatchContext);

  if (!dispatch) throw new Error("Can't find CardContext");

  return dispatch;
}
