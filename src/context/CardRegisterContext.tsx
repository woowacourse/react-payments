import React, { PropsWithChildren, useContext, useState } from 'react';
import { createContext } from 'react';
import { CardRegisterInfo } from '../types/card.type';

export const initialCardRegisterInfo: CardRegisterInfo = {
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
  bankName: '현대카드',
};

type CardRegisterContextType = {
  cardRegisterInfo: CardRegisterInfo | null;
  handleCardInfo<T extends keyof CardRegisterInfo>(key: T, value: CardRegisterInfo[T]): void;
  initCardRegisterInfo(): void;
};

export const CardRegisterContext = createContext<CardRegisterContextType>({
  cardRegisterInfo: null,
  handleCardInfo() {
    throw new Error('handleCardInfo 는 아직 적용되지 않았습니다. CardRegisterProvider 를 사용하세요.');
  },
  initCardRegisterInfo() {
    throw new Error('initCardRegisterInfo 는 아직 적용되지 않았습니다. CardRegisterProvider 를 사용하세요.');
  },
});

export const useCardRegisterContext = () => useContext(CardRegisterContext);

export default function CardRegisterProvider({ children }: PropsWithChildren) {
  const [cardRegisterInfo, setCardRegisterInfo] = useState<CardRegisterInfo>(initialCardRegisterInfo);

  const initCardRegisterInfo = () => setCardRegisterInfo(initialCardRegisterInfo);

  const handleCardInfo: <T extends keyof CardRegisterInfo>(key: T, value: CardRegisterInfo[T]) => void = (key, value) => {
    setCardRegisterInfo((prev) => ({ ...prev, [key]: value }));
  };
  return <CardRegisterContext.Provider value={{ cardRegisterInfo, handleCardInfo, initCardRegisterInfo }}>{children}</CardRegisterContext.Provider>;
}
