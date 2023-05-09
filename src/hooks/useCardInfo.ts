import { COMPANY_NAME, Card } from 'components/common/Card/types';
import { Dispatch, useReducer } from 'react';

type ReducerActionTypes =
  | { type: 'SET_CARD_NAME'; payload: string }
  | { type: 'SET_BANK'; payload: COMPANY_NAME }
  | { type: 'SET_NUMBERS'; payload: string; index: number }
  | { type: 'SET_EXPIRATION_MONTH'; payload: string }
  | { type: 'SET_EXPIRATION_YEAR'; payload: string }
  | { type: 'SET_OWNER_NAME'; payload: string }
  | { type: 'SET_SECURITY_CODE'; payload: string }
  | { type: 'SET_FIRST_PASSWORD'; payload: string }
  | { type: 'SET_SECOND_PASSWORD'; payload: string };

export interface ReducerCardInfo {
  numbers: [string, string, string, string];
  expirationMonth: string;
  expirationYear: string;
  ownerName: string;
  securityCode: string;
  firstPassword: string;
  secondPassword: string;
}

const reducer = (state: Card, action: ReducerActionTypes): Card => {
  switch (action.type) {
    case 'SET_NUMBERS':
      const prevCardNumbers = [...state.numbers];
      if (action.index !== undefined) {
        prevCardNumbers.splice(action.index, 1, action.payload);
      }
      return { ...state, numbers: prevCardNumbers };
    case 'SET_EXPIRATION_MONTH':
      return {
        ...state,
        expirationDate: { month: action.payload, year: state.expirationDate.year },
      };
    case 'SET_EXPIRATION_YEAR':
      return {
        ...state,
        expirationDate: { year: action.payload, month: state.expirationDate.month },
      };
    case 'SET_OWNER_NAME':
      return { ...state, ownerName: action.payload };
    case 'SET_SECURITY_CODE':
      return { ...state, securityCode: action.payload };
    case 'SET_FIRST_PASSWORD':
      return { ...state, password: { first: action.payload, second: state.password.second } };
    case 'SET_SECOND_PASSWORD':
      return { ...state, password: { second: action.payload, first: state.password.first } };
    case 'SET_BANK':
      return { ...state, bank: action.payload };
    default:
      return { ...state };
  }
};

export const useCardInfo = (cardInfo: Card): [Card, Dispatch<ReducerActionTypes>] => {
  const [state, dispatch] = useReducer(reducer, cardInfo);

  return [state, dispatch];
};
