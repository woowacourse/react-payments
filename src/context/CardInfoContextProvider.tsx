import React, { useReducer } from "react";
import { CardInfoStateTypeInterface } from "./CardInfoContext";

interface CardInfoContextInterface {
  state: CardInfoStateTypeInterface;
  setState: (action: { payload: Partial<CardInfoStateTypeInterface> }) => void;
}

const initialCardInfoState = {
  cardNumber: ["", "", "", ""],
  expireDate: ["", ""],
  holderName: "",
  securityCodeLength: 0,
  passwordLength: [0, 0],
};

export const CardInfoContext =
  React.createContext<null | CardInfoContextInterface>(null);

const cardInfoReducer = (state, action) => {
  return { ...state, ...action.payload };
};

export default function CardInfoContextProvider({ children }) {
  const [cardInfo, setCardInfo] = useReducer(
    cardInfoReducer,
    initialCardInfoState
  );

  return (
    <CardInfoContext.Provider
      value={{ state: cardInfo, setState: setCardInfo }}
    >
      {children}
    </CardInfoContext.Provider>
  );
}
