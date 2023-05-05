import { ReactNode, createContext, useState } from 'react';

import type { CardInfo, CardInfoKey } from '../types/card';

const initialCardInfo: CardInfo = {
  number: {
    first: '',
    second: '',
    third: '',
    fourth: '',
  },
  expiredDate: {
    month: '',
    year: '',
  },
  owner: '',
  cvc: '',
  password: {
    first: '',
    second: '',
  },
};

export const CardFormValueContext = createContext<CardInfo | null>(null);
export const CardFormActionContext = createContext<CardFormAction | null>(null);

export const isCardInfoKey = (name: string): name is CardInfoKey =>
  name in initialCardInfo;

interface CardFormAction {
  (value: string, target: CardInfoKey, property?: string): void;
}

interface Props {
  children?: ReactNode;
}

const CardFormProvider = ({ children }: Props) => {
  const [cardInfo, setCardInfo] = useState<CardInfo>(initialCardInfo);

  const handleCardInfo = (
    value: string,
    target: CardInfoKey,
    property?: string,
  ) => {
    setCardInfo((prev) => {
      const targetValue = prev[target];

      if (typeof targetValue === 'object' && property) {
        return { ...prev, [target]: { ...targetValue, [property]: value } };
      }

      return { ...prev, [target]: value };
    });
  };

  return (
    <CardFormActionContext.Provider value={handleCardInfo}>
      <CardFormValueContext.Provider value={cardInfo}>
        {children}
      </CardFormValueContext.Provider>
    </CardFormActionContext.Provider>
  );
};

export default CardFormProvider;
