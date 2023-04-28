import React, { PropsWithChildren, useContext, useState } from 'react';
import { createContext } from 'react';
import { CardRegisterInfo } from '../types/card.type';

export const initialCardRegisterInfo = {
  cardNumber: {
    first: '',
    second: '',
    third: '',
    fourth: '',
  },
  expirationDate: {
    month: '',
    year: '',
  },
  holderName: '',
  cvc: '',
  password: {
    passwordFirstDigit: '',
    passwordSecondDigit: '',
  },
};

export const CardRegisterContext = createContext<{
  cardRegisterInfo: CardRegisterInfo;
  handleCardInfo<T extends keyof CardRegisterInfo>(
    key: T,
    value: CardRegisterInfo[T]
  ): void;
  initCardRegisterInfo(): void;
}>({
  cardRegisterInfo: initialCardRegisterInfo,
  handleCardInfo() {},
  initCardRegisterInfo() {},
});

export const useCardRegisterContext = () => useContext(CardRegisterContext);

export default function CardRegisterProvider({ children }: PropsWithChildren) {
  const [cardRegisterInfo, setCardRegisterInfo] = useState<CardRegisterInfo>(
    initialCardRegisterInfo
  );

  const initCardRegisterInfo = () =>
    setCardRegisterInfo(initialCardRegisterInfo);

  const handleCardInfo: <T extends keyof CardRegisterInfo>(
    key: T,
    value: CardRegisterInfo[T]
  ) => void = (key, value) => {
    setCardRegisterInfo((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <CardRegisterContext.Provider
      value={{ cardRegisterInfo, handleCardInfo, initCardRegisterInfo }}>
      {children}
    </CardRegisterContext.Provider>
  );
}
