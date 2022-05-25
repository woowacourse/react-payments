import React from "react";

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
  setState: (state: CardInfoStateTypeInterface) => void;
}

const initialCardInfoState = {
  cardNumber: ["", "", "", ""],
  expireDate: ["", ""],
  holderName: "",
  securityCodeLength: 0,
  passwordLength: [0, 0],
};

const CardInfoContext = React.createContext<CardInfoContextInterface | null>({
  state: initialCardInfoState,
  setState: () => {},
});

export default CardInfoContext;
