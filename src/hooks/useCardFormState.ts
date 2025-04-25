import { useReducer } from 'react';

import { CardBrand } from '@/constants/brandColors';

type Action = 'CARD_NUMBER' | 'BRAND' | 'EXPIRE_DATE' | 'CVC' | 'PASSWORD';

export type CardInputItem = {
  value: string;
  isValid: boolean;
};
export type CardForm = {
  cardNumber: CardInputItem[];
  brand: CardBrand | null;
  expireDate: CardInputItem[];
  cvc: CardInputItem;
  password: CardInputItem;
};

export const useCardFormState = () => {
  const [formData, dispatch] = useReducer(reducer, createInitialFormState());
  return [formData, dispatch] as const;
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
