/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import * as Type from 'types';

export const defaultCreditCardForm: Type.CreditCard = {
  companyId: '',
  number: '',
  expiry: '',
  owner: '',
  cvc: '',
  password: ['', ''],
  nickname: '',
};

export interface CardFormState {
  creditCardForm: Type.CreditCard;
  setCreditCardForm: React.Dispatch<React.SetStateAction<Type.CreditCard>>;
}

export const CardContext = React.createContext<CardFormState>({
  creditCardForm: defaultCreditCardForm,
  setCreditCardForm: () => { },
});

interface CardProviderProps {
  children: React.ReactNode;
}

function CardFormProvider({ children }: CardProviderProps) {
  const [creditCardForm, setCreditCardForm] = useState<Type.CreditCard>(defaultCreditCardForm);

  const state = { creditCardForm, setCreditCardForm, };

  return (
    <CardContext.Provider value={state}>
      {children}
    </CardContext.Provider>
  );
}

export default CardFormProvider;
