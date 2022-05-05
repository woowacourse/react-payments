import React, { createContext, useReducer } from 'react';

import { CARD_COMPANY_COLORS } from '../constants';

import TYPING_CARD_NUMBER from '../system/CardNumber/action';
import TYPING_CARD_EXPIRATION from '../system/CardExpiration/action';
import TYPING_CARD_OWNER from '../system/CardOwner/action';
import TYPING_CARD_CVC from '../system/CardCvc/actions';
import TYPING_CARD_PASSWORD from '../system/CardPassword/action';
import { SHOW_MODAL, HIDE_MODAL, SELECT_CARD_COMPANY } from '../pages/CardAddition/CardListModal/action';

const initialState = {
  cardNumber: ['', '', '', ''],
  cardExpiration: ['', ''],
  cardOwner: '',
  cardCvc: '',
  cardPassword: ['', ''],
  cardCompanyName: '',
  cardCompanyColor: CARD_COMPANY_COLORS.UNSELECTED_COMPANY,
  modalVisible: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case TYPING_CARD_NUMBER: {
      const cardNumber = [...state.cardNumber];
      const { value, index } = action;

      cardNumber[index] = value;

      return {
        ...state,
        cardNumber,
      };
    }

    case TYPING_CARD_EXPIRATION: {
      const cardExpiration = [...state.cardExpiration];
      const { value, index } = action;

      cardExpiration[index] = value;

      return {
        ...state,
        cardExpiration,
      };
    }

    case TYPING_CARD_OWNER: {
      return { ...state, cardOwner: action.value };
    }

    case TYPING_CARD_CVC: {
      return { ...state, cardCvc: action.value };
    }

    case TYPING_CARD_PASSWORD: {
      const cardPassword = [...state.cardPassword];
      const { value, index } = action;

      cardPassword[index] = value;

      return {
        ...state,
        cardPassword,
      };
    }

    case SHOW_MODAL: {
      return {
        ...state,
        modalVisible: true,
      };
    }

    case HIDE_MODAL: {
      return {
        ...state,
        modalVisible: false,
      };
    }

    case SELECT_CARD_COMPANY: {
      return {
        ...state,
        cardCompanyName: action.name,
        cardCompanyColor: action.color,
      };
    }

    default:
      return state;
  }
};

export const CardStateContext = createContext();
export const CardDispatchContext = createContext();

export const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CardStateContext.Provider value={state}>
      <CardDispatchContext.Provider value={dispatch}>
        {children}
      </CardDispatchContext.Provider>
    </CardStateContext.Provider>
  );
};
