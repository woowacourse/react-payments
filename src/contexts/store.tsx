import React, { useReducer, createContext } from "react";

import { CardInfo, CardNumbers, Password, ExpiredDate } from "../types";

type ActionType =
  | "RESET"
  | "UPDATE_CARD_NUMBER"
  | "UPDATE_EXPIRED_DATE"
  | "UPDATE_PASSWORD"
  | "UPDATE_SECURITY_CODE"
  | "UPDATE_USER_NAME"
  | "TRIM_USER_NAME"
  | "CHANGE_CARD_TYPE";

type Action = {
  type: ActionType;
  payload?: {
    cardType?: string;
    cardNumbers?: string;
    expiredDate?: ExpiredDate;
    password?: Password;
    securityCode?: string;
    userName?: string;
    index?: string;
    key?: string;
  };
};

type ContextValue = [CardInfo, React.Dispatch<Action>];

// initialState
const initialCardInfo: CardInfo = {
  cardType: "empty",
  cardNumbers: ["", "", "", ""],
  expiredDate: { month: "", year: "" },
  userName: "",
  securityCode: "",
  password: ["", ""],
};

// actions
const RESET = "RESET";
const UPDATE_CARD_NUMBER = "UPDATE_CARD_NUMBER";
const UPDATE_EXPIRED_DATE = "UPDATE_EXPIRED_DATE";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";
const UPDATE_SECURITY_CODE = "UPDATE_SECURITY_CODE";
const UPDATE_USER_NAME = "UPDATE_USER_NAME";
const TRIM_USER_NAME = "TRIM_USER_NAME";
const CHANGE_CARD_TYPE = "CHANGE_CARD_TYPE";

// actionCreators;
// const updateCardNumbers = payload => ({ type: UPDATE, payload });
// const reset = () => ({ type: RESET });

// reducer
export const reducer = (state: CardInfo, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case RESET:
      return { ...state, initialCardInfo };
    case UPDATE_CARD_NUMBER: {
      const { cardNumbers, index } = payload;
      const newCardNumbers: CardNumbers = [...state.cardNumbers];

      newCardNumbers[index] = Number(index) < 2 ? cardNumbers : "•".repeat(cardNumbers.length);

      return { ...state, cardNumbers: newCardNumbers };
    }
    case UPDATE_EXPIRED_DATE: {
      const { expiredDate, key } = payload;
      const newExpiredDate = {
        ...state.expiredDate,
      };

      newExpiredDate[key] = expiredDate;

      return { ...state, expiredDate: newExpiredDate };
    }
    case UPDATE_PASSWORD: {
      const { password, index } = payload;
      const newPassword: Password = [...state.password];

      newPassword[index] = password;

      return { ...state, password: newPassword };
    }
    case UPDATE_SECURITY_CODE: {
      const { securityCode } = payload;

      return { ...state, securityCode };
    }
    case UPDATE_USER_NAME: {
      const { userName } = payload;

      const newUserName = userName.replace("  ", " ").toUpperCase();

      return { ...state, userName: newUserName };
    }
    case TRIM_USER_NAME: {
      const { userName } = payload;

      return { ...state, userName: userName.trim() };
    }
    case CHANGE_CARD_TYPE: {
      const { cardType } = payload;

      return { ...state, cardType };
    }
    default:
      return state;
  }
};

// Context
const Context = createContext<ContextValue | undefined>(undefined);

const ContextProvider = ({ children }) => {
  const [state, dispatch]: ContextValue = useReducer(reducer, initialCardInfo);

  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
