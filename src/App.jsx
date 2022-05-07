import { useState, useReducer, useRef, createContext } from 'react';

import CardListPage from 'pages/CardListPage';
import CardAddPage from 'pages/CardAddPage';

import { PAGES } from 'constants';

const initialState = {
  inputs: {
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
    name: '',
    inputValid: false,
  },
  cards: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CARD_NUMBERS':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          number1: action.cardNumbers[0],
          number2: action.cardNumbers[1],
          number3: action.cardNumbers[2],
          number4: action.cardNumbers[3],
        },
      };
    case 'SET_CARD_EXPIRATION_DATE':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          month: action.cardExpirationDate.month,
          year: action.cardExpirationDate.year,
        },
      };
    case 'SET_CARD_OWNER':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          owner: action.owner,
        },
      };
    case 'SET_CVC':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          cvc: action.cvc,
        },
      };
    case 'SET_CARD_PASSWORDS':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          password1: action.cardPasswords[0],
          password2: action.cardPasswords[1],
        },
      };
    case 'SET_CARD_NAME':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          name: action.name,
        },
      };
    case 'SET_CARD_INPUT_VALID':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          inputValid: action.boolean,
        },
      };
    case 'REGISTER_CARD':
      return {
        inputs: initialState.inputs,
        cards: state.cards.concat(action.card),
      };
    default:
      return state;
  }
};

export const CardInfoContext = createContext(null);

function App() {
  const [page, setPage] = useState(PAGES.LIST);
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(1);

  return (
    <CardInfoContext.Provider value={{ page, state, setPage, dispatch, nextId }}>
      {page === PAGES.LIST ? <CardListPage /> : <CardAddPage />}
    </CardInfoContext.Provider>
  );
}

export default App;
