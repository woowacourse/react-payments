import React, { createContext, PropsWithChildren, useReducer } from 'react';

import { Action, CardForm } from '@/components/features/CardFormFiled/CardFormFiled.types';

type CardFormContextType = {
  formData: CardForm;
  dispatch: React.Dispatch<{ type: Action; payload: CardForm }>;
};

const createInitialFormState = (): CardForm => ({
  cardNumber: Array.from({ length: 4 }, () => ({ value: '', isValid: true })),
  brand: null,
  expireDate: Array.from({ length: 2 }, () => ({ value: '', isValid: true })),
  cvc: { value: '', isValid: true },
  password: { value: '', isValid: true },
});

const reducer = (state: CardForm, action: { type: Action; payload: CardForm }) => {
  switch (action.type) {
    case 'CARD_NUMBER':
      return {
        ...state,
        cardNumber: action.payload.cardNumber,
      };
    case 'BRAND':
      return {
        ...state,
        brand: action.payload.brand,
      };
    case 'EXPIRE_DATE':
      return {
        ...state,
        expireDate: action.payload.expireDate,
      };
    case 'CVC':
      return {
        ...state,
        cvc: {
          value: action.payload.cvc.value,
          isValid: action.payload.cvc.isValid,
        },
      };
    case 'PASSWORD':
      return {
        ...state,
        password: {
          value: action.payload.password.value,
          isValid: action.payload.password.isValid,
        },
      };
    default:
      return state;
  }
};

export const CardFormContext = createContext<CardFormContextType>({
  formData: createInitialFormState(),
  dispatch: () => {},
});

export const CardFormProvider = ({ children }: PropsWithChildren) => {
  const [formData, dispatch] = useReducer(reducer, createInitialFormState());

  return (
    <CardFormContext.Provider value={{ formData, dispatch }}>{children}</CardFormContext.Provider>
  );
};
