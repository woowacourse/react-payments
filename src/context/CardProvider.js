import React, { createContext, useReducer } from 'react';

import { CARD_COMPANY_COLORS } from '../constants';

import TYPING_CARD_NUMBER from '../system/CardNumber/action';
import { TYPING_CARD_EXPIRATION_MONTH, TYPING_CARD_EXPIRATION_YEAR } from '../system/CardExpiration/action';
import TYPING_CARD_OWNER from '../system/CardOwner/action';
import TYPING_CARD_CVC from '../system/CardCvc/actions';
import TYPING_CARD_PASSWORD from '../system/CardPassword/action';
import { SHOW_MODAL, HIDE_MODAL, SELECT_CARD_COMPANY } from '../pages/CardAddition/CardListModal/action';
import ADD_CARD from '../pages/CardAddition/action';
import UPDATE_CARD_ALIAS from '../hooks/useAliasModal/action';
import DELETE_CARD from '../pages/Home/Cards/action';

const initialState = {
  cardNumber: ['', '', '', ''],
  cardExpiration: ['', ''],
  cardOwner: '',
  cardCvc: '',
  cardPassword: ['', ''],
  cardCompanyName: '',
  cardCompanyColor: CARD_COMPANY_COLORS.UNSELECTED_COMPANY,
  modalVisible: false,
  cards: [],
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

    case TYPING_CARD_EXPIRATION_MONTH: {
      return {
        ...state,
        cardExpiration: [action.value, state.cardExpiration[1]],
      };
    }

    case TYPING_CARD_EXPIRATION_YEAR: {
      return {
        ...state,
        cardExpiration: [state.cardExpiration[0], action.value],
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

    case ADD_CARD: {
      return {
        ...state,
        cards: [...state.cards, action.card],
      };
    }

    case UPDATE_CARD_ALIAS: {
      const cards = [...state.cards];
      const index = cards.findIndex((card) => card[1].join('') === action.cardNumber.join(''));
      let card = [...cards[index]];

      card[5] = action.alias;
      cards[index] = card;

      return {
        ...state,
        cards,
      };
    }

    case DELETE_CARD: {
      return {
        ...state,
        cards: state.cards.filter((card) => card[1] !== action.cardNumber),
      }
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
