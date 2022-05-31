import React, { useReducer } from "react";

export interface CardInfoStateTypeInterface {
  cardNumber: string[];
  holderName: string;
  expireDate: string[];
  securityCodeLength: number;
  passwordLength: number[];
  nickname?: string;
}

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
