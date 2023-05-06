import { ComponentPropsWithoutRef, useReducer } from 'react';
import { CardRegisterInfo } from '../../types/card.type';
import { ActionType, CardRegisterAction } from './cardRegisterAction';

export const initialCardRegisterInfo = {
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
  bank: {},
  alias: '우아한 카드',
};

export function cardRegisterReducer(state: CardRegisterInfo, action: CardRegisterAction) {
  switch (action.type) {
    case 'UPDATE_CARD_NUMBER': {
      const { field, value } = action.payload;

      return {
        ...state,
        cardNumber: {
          ...state.cardNumber,
          [field]: value,
        },
      };
    }
    case 'UPDATE_EXPIRATION_DATE': {
      return state;
    }
    case 'UPDATE_HOLDER_NAME': {
      return state;
    }
    case 'UPDATE_CVC': {
      return state;
    }
    case 'UPDATE_PASSWORD': {
      return state;
    }
    case 'UPDATE_ALIAS': {
      return state;
    }
    case 'UPDATE_BANK': {
      return state;
    }

    default:
      return state;
  }
}
