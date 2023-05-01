import { useReducer } from 'react';
import { v4 } from 'uuid';
import {
  isValidCardNumber,
  isValidExpirationDate,
  isValidOwnerName,
  isValidPassword,
  isValidSecurityCode,
} from '../cardInputValidator';
import {
  Card,
  CardCompany,
  CardNumber,
  ExpirationDate,
  OwnerName,
  Password,
  SecurityCode,
} from '../types';

type Action =
  | { type: 'SET_CARD_COMPANY'; cardCompany: CardCompany }
  | { type: 'SET_CARD_NUMBER'; cardNumber: CardNumber }
  | { type: 'SET_EXPIRATION_DATE'; expirationDate: ExpirationDate }
  | { type: 'SET_OWNER_NAME'; ownerName: OwnerName }
  | { type: 'SET_SECURITY_CODE'; securityCode: SecurityCode }
  | { type: 'SET_PASSWORD'; password: Password };

const reducer = (state: Card, action: Action): Card => {
  if (action.type === 'SET_CARD_COMPANY') return { ...state, cardCompany: action.cardCompany };
  if (action.type === 'SET_CARD_NUMBER') return { ...state, cardNumber: action.cardNumber };
  if (action.type === 'SET_OWNER_NAME') return { ...state, ownerName: action.ownerName };
  if (action.type === 'SET_SECURITY_CODE') return { ...state, securityCode: action.securityCode };
  if (action.type === 'SET_PASSWORD') return { ...state, password: action.password };
  if (action.type === 'SET_EXPIRATION_DATE') {
    return { ...state, expirationDate: action.expirationDate };
  }

  throw new Error('Unhandled action');
};

export const useCardRegisterForm = () => {
  const [card, dispatch] = useReducer(reducer, {
    id: v4(),
    cardCompany: '우리카드',
    cardNumber: ['', '', '', ''],
    expirationDate: { month: '', year: '' },
    ownerName: '',
    securityCode: '',
    password: ['', ''],
  });

  const setCardCompany = (input: CardCompany) => {
    dispatch({ type: 'SET_CARD_COMPANY', cardCompany: input });
  };
  const setCardNumber = (input: CardNumber) => {
    dispatch({ type: 'SET_CARD_NUMBER', cardNumber: input });
  };
  const setExpirationDate = (input: ExpirationDate) => {
    dispatch({ type: 'SET_EXPIRATION_DATE', expirationDate: input });
  };
  const setOwnerName = (input: OwnerName) => dispatch({ type: 'SET_OWNER_NAME', ownerName: input });
  const setPassword = (input: Password) => dispatch({ type: 'SET_PASSWORD', password: input });
  const setSecurityCode = (input: SecurityCode) => {
    dispatch({ type: 'SET_SECURITY_CODE', securityCode: input });
  };

  const isValidCardForm =
    isValidCardNumber(card.cardNumber) &&
    isValidExpirationDate(card.expirationDate) &&
    isValidOwnerName(card.ownerName) &&
    isValidSecurityCode(card.securityCode) &&
    isValidPassword(card.password);

  return {
    card,
    setCardCompany,
    setCardNumber,
    setExpirationDate,
    setOwnerName,
    setSecurityCode,
    setPassword,
    isValidCardForm,
  };
};
