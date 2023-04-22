import React, { createContext } from 'react';

export interface CardInfoType {
  cardNumbers: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  expireDate: string;
  ownerName: string;
  securityCode: string;
  password: {
    first: string;
    second: string;
  };
}
const initialCardInfos = {
  cardNumbers: {
    first: '',
    second: '',
    third: '',
    fourth: '',
  },
  expireDate: '',
  ownerName: '',
  securityCode: '',
  password: {
    first: '',
    second: '',
  },
};

export const InputValuesContext = createContext<
  [CardInfoType, React.Dispatch<React.SetStateAction<CardInfoType>> | null]
>([initialCardInfos, null]);
