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
import { CARD_COMPANY } from '../constants';

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

  return state;
};

export const useCardRegisterForm = () => {
  const [card, cardDispatch] = useReducer(reducer, {
    id: v4(),
    cardCompany: CARD_COMPANY.WOORI.name,
    cardNumber: ['', '', '', ''],
    expirationDate: { month: '', year: '' },
    ownerName: '',
    securityCode: '',
    password: ['', ''],
  });

  const isValidCardForm =
    isValidCardNumber(card.cardNumber) &&
    isValidExpirationDate(card.expirationDate) &&
    isValidOwnerName(card.ownerName) &&
    isValidSecurityCode(card.securityCode) &&
    isValidPassword(card.password);

  return {
    card,
    cardDispatch,
    isValidCardForm,
  };
};
