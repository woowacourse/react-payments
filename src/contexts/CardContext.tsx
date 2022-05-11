import React, { useReducer, createContext } from "react";

import { CardInfo, CardNumbers, Password, ExpiredDate } from "../types";

type ActionType =
  | "RESET"
  | "UPDATE_CARD"
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
    cardInfo?: CardInfo;
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

// initialcardInfo
const initialCardInfo: CardInfo = {
  cardName: "",
  cardType: "empty",
  cardNumbers: ["", "", "", ""],
  expiredDate: { month: "", year: "" },
  userName: "",
  securityCode: "",
  password: ["", ""],
  id: null,
};

// actions
const RESET = "RESET";
const UPDATE_CARD = "UPDATE_CARD";
const UPDATE_CARD_NUMBER = "UPDATE_CARD_NUMBER";
const UPDATE_EXPIRED_DATE = "UPDATE_EXPIRED_DATE";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";
const UPDATE_SECURITY_CODE = "UPDATE_SECURITY_CODE";
const UPDATE_USER_NAME = "UPDATE_USER_NAME";
const TRIM_USER_NAME = "TRIM_USER_NAME";
const CHANGE_CARD_TYPE = "CHANGE_CARD_TYPE";

// reducer
export const reducer = (cardInfo: CardInfo, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case RESET:
      return initialCardInfo;
    case UPDATE_CARD: {
      const { cardInfo } = payload;

      return cardInfo;
    }
    case UPDATE_CARD_NUMBER: {
      const { cardNumbers, index } = payload;
      const newCardNumbers: CardNumbers = [...cardInfo.cardNumbers];

      newCardNumbers[index] = Number(index) < 2 ? cardNumbers : "•".repeat(cardNumbers.length);

      return { ...cardInfo, cardNumbers: newCardNumbers };
    }
    case UPDATE_EXPIRED_DATE: {
      const { expiredDate, key } = payload;
      const newExpiredDate = {
        ...cardInfo.expiredDate,
      };

      newExpiredDate[key] = expiredDate;

      return { ...cardInfo, expiredDate: newExpiredDate };
    }
    case UPDATE_PASSWORD: {
      const { password, index } = payload;
      const newPassword: Password = [...cardInfo.password];

      newPassword[index] = password;

      return { ...cardInfo, password: newPassword };
    }
    case UPDATE_SECURITY_CODE: {
      const { securityCode } = payload;

      return { ...cardInfo, securityCode };
    }
    case UPDATE_USER_NAME: {
      const { userName } = payload;

      const newUserName = userName.replace("  ", " ").toUpperCase();

      return { ...cardInfo, userName: newUserName };
    }
    case TRIM_USER_NAME: {
      const { userName } = payload;

      return { ...cardInfo, userName: userName.trim() };
    }
    case CHANGE_CARD_TYPE: {
      const { cardType } = payload;

      return { ...cardInfo, cardType };
    }
    default:
      return cardInfo;
  }
};

// Context
const Context = createContext<ContextValue | undefined>(undefined);

const ContextProvider = ({ children }) => {
  const [cardInfo, dispatch]: ContextValue = useReducer(reducer, initialCardInfo);

  return <Context.Provider value={[cardInfo, dispatch]}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
