import React, { createContext } from "react";

interface CardInfoType {
  cardNumbers: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  expireDate: string;
  ownerName: string;
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
};

export const InputValuesContext = createContext<
  [CardInfoType, React.Dispatch<React.SetStateAction<CardInfoType>> | null]
>([initialCardInfos, null]);
