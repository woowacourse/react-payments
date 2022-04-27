import './App.css';
import React, { useReducer } from 'react';
import CardAddition from './CardAddition';
import CardContext from './CardContext';

const initialState = {
  cardNumber: ['', '', '', ''],
  cardExpiration: ['', ''],
  cardOwner: '',
  cardCvc: '',
  cardPassword: ['', ''],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CARD_NUMBER': {
      const cardNumber = [...state.cardNumber];
      const { value, index } = action;

      cardNumber[index] = value;

      return {
        ...state,
        cardNumber,
      };
    }
    case 'SET_CARD_EXPIRATION':
    case 'SET_CARD_OWNER':
    case 'SET_CARD_CVC':
    case 'SET_CARD_PASSWORD':
    default:
      return state;
  }
};

function App() {
  const [{ cardNumber, cardExpiration, cardOwner, cardCvc, cardPassword }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  const value = { cardNumber, cardExpiration, cardOwner, cardCvc, cardPassword, dispatch };

  return (
    <div className="App">
      <CardContext.Provider value={value}>
        <CardAddition />
      </CardContext.Provider>
    </div>
  );
}

export default App;
