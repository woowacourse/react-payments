/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import * as Type from 'types';

const initCreditCard: Type.CreditCard = {
  companyId: '',
  number: '',
  expiry: '',
  owner: '',
  cvc: '',
  password: {
    first: '',
    second: '',
  },
};

export interface CardState {
  creditCard: Type.CreditCard;
  setCreditCard: React.Dispatch<React.SetStateAction<Type.CreditCard>>;
}

export const CardContext = React.createContext<CardState>({
  creditCard: initCreditCard,
  setCreditCard: () => { },
});

interface CardProviderProps {
  children: React.ReactNode;
}

function ModalProvider({ children }: CardProviderProps) {
  const [creditCard, setCreditCard] = useState<Type.CreditCard>(initCreditCard);

  const state = {
    creditCard,
    setCreditCard,
  };

  return (
    <CardContext.Provider value={state}>
      {children}
    </CardContext.Provider>
  );
}

export default ModalProvider;
