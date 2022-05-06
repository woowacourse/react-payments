import { useState, useReducer, createContext } from 'react';

import CardListPage from 'pages/CardListPage';
import CardAddPage from 'pages/CardAddPage';
import { PAGES } from 'constants';

const initialState = {
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
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CARD_NUMBERS':
      return {
        ...state,
        number1: action.cardNumbers[0],
        number2: action.cardNumbers[1],
        number3: action.cardNumbers[2],
        number4: action.cardNumbers[3],
      };
    case 'SET_CRAD_EXPIRATION_DATE':
      return {
        ...state,
        month: action.cardExpirationDate.month,
        year: action.cardExpirationDate.year,
      };
    case 'SET_CARD_OWNER':
      return {
        ...state,
        owner: action.owner,
      };
    case 'SET_CVC':
      return {
        ...state,
        cvc: action.cvc,
      };
    case 'SET_CARD_PASSWORDS':
      return {
        ...state,
        password1: action.cardPasswords[0],
        password2: action.cardPasswords[1],
      };
    default:
      return state;
  }
};

export const CardInfoContext = createContext(null);

function App() {
  const [page, setPage] = useState(PAGES.LIST);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CardInfoContext.Provider value={{ state, setPage, dispatch }}>
      {page === PAGES.LIST ? <CardListPage /> : <CardAddPage />}
    </CardInfoContext.Provider>
  );
}

export default App;
