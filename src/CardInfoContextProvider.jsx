import { useReducer, createContext } from 'react';
import { ACTION } from 'constants';
import React from 'react';

const initialState = {
  card: {
    number1: '',
    number2: '',
    number3: '',
    number4: '',
    month: '',
    year: '',
    owner: '',
    cvc: '',
    password1: '',
    password2: '',
    nickname: '',
  },
  cards: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.SET_CARD_NUMBERS:
      return {
        card: {
          ...state.card,
          number1: action.cardNumbers[0],
          number2: action.cardNumbers[1],
          number3: action.cardNumbers[2],
          number4: action.cardNumbers[3],
        },
        cards: [...state.cards],
      };
    case ACTION.SET_CRAD_EXPIRATION_DATE:
      return {
        card: {
          ...state.card,
          month: action.cardExpirationDate.month,
          year: action.cardExpirationDate.year,
        },
        cards: [...state.cards],
      };
    case ACTION.SET_CARD_OWNER:
      return {
        card: {
          ...state.card,
          owner: action.owner,
        },
        cards: [...state.cards],
      };
    case ACTION.SET_CVC:
      return {
        card: {
          ...state.card,
          cvc: action.cvc,
        },
        cards: [...state.cards],
      };
    case ACTION.SET_CARD_PASSWORDS:
      return {
        card: {
          ...state.card,
          password1: action.cardPasswords[0],
          password2: action.cardPasswords[1],
        },
        cards: [...state.cards],
      };
    case ACTION.SET_CARD_NICKNAME:
      return {
        card: {
          ...state.card,
          nickname: action.newNickname,
        },
        cards: [...state.cards],
      };
    case ACTION.ADD_CARD:
      return {
        card: {
          number1: '',
          number2: '',
          number3: '',
          number4: '',
          month: '',
          year: '',
          owner: '',
          cvc: '',
          password1: '',
          password2: '',
          nickname: '',
        },
        cards: [...state.cards, state.card],
      };
    default:
      return state;
  }
};

export const CardInfoContext = createContext(null);

function CardInfoContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CardInfoContext.Provider value={{ state, dispatch }}>{children}</CardInfoContext.Provider>
  );
}

export default CardInfoContextProvider;
