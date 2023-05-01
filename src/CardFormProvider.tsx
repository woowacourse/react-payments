/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-no-constructed-context-values */
import { defaultCreditCardForm } from 'data/creditCard';
import {
  Dispatch, ReactNode, SetStateAction, createContext, useState
} from 'react';
import * as Type from 'types';

export interface CardFormState {
  creditCardForm: Type.CreditCard;
  setCreditCardForm: Dispatch<SetStateAction<Type.CreditCard>>;
}

export const CardContext = createContext<CardFormState>({
  creditCardForm: defaultCreditCardForm,
  setCreditCardForm: () => { },
});

interface CardProviderProps {
  children: ReactNode;
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
