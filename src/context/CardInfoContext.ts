import React, { createContext } from "react";
import { CardNumberObj, CardPasswordObj } from "src/interfaces";

export interface CardInfoType {
  cardNumbers: CardNumberObj;
  expireDate: string;
  ownerName: string;
  securityCode: string;
  password: CardPasswordObj;
}
const initialCardInfos = {
  cardNumbers: {
    first: "",
    second: "",
    third: "",
    fourth: "",
  },
  expireDate: "",
  ownerName: "",
  securityCode: "",
  password: {
    first: "",
    second: "",
  },
};

export const cardInfoContext = createContext<
  [CardInfoType, React.Dispatch<React.SetStateAction<CardInfoType>> | null]
>([initialCardInfos, null]);
