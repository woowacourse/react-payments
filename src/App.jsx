import './App.css';
import React, { useReducer } from 'react';
import CardAddition from './CardAddition';
import CardContext from './CardContext';

const initialState = {
  cardNumber: ['', '', '', ''],
  cardNumberErrorMessage: '',
  cardExpiration: ['', ''],
  cardExpirationErrorMessage: '',
  cardOwner: '',
  cardOwnerErrorMessage: '',
  cardCvc: '',
  cardCvcErrorMessage: '',
  cardPassword: ['', ''],
  cardPasswordErrorMessage: '',
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

    case 'SET_CARD_NUMBER_ERROR_MESSAGE': {
      return {
        ...state,
        cardNumberErrorMessage: action.errorMessage,
      };
    }

    case 'SET_CARD_EXPIRATION': {
      const cardExpiration = [...state.cardExpiration];
      const { value, index } = action;

      cardExpiration[index] = value;

      return {
        ...state,
        cardExpiration,
      };
    }

    case 'SET_CARD_EXPIRATION_ERROR_MESSAGE': {
      return {
        ...state,
        cardExpirationErrorMessage: action.errorMessage,
      };
    }

    case 'SET_CARD_OWNER': {
      return { ...state, cardOwner: action.value };
    }

    case 'SET_CARD_OWNER_ERROR_MESSAGE': {
      return {
        ...state,
        cardOwnerErrorMessage: action.errorMessage,
      };
    }

    case 'SET_CARD_CVC': {
      return { ...state, cardCvc: action.value };
    }

    case 'SET_CARD_CVC_ERROR_MESSAGE': {
      return {
        ...state,
        cardCvcErrorMessage: action.errorMessage,
      };
    }

    case 'SET_CARD_PASSWORD': {
      const cardPassword = [...state.cardPassword];
      const { value, index } = action;

      cardPassword[index] = value;

      return {
        ...state,
        cardPassword,
      };
    }

    case 'SET_CARD_PASSWORD_ERROR_MESSAGE': {
      return {
        ...state,
        cardPasswordErrorMessage: action.errorMessage,
      };
    }

    default:
      return state;
  }
};

function App() {
  const [
    {
      cardNumber,
      cardNumberErrorMessage,
      cardExpirationErrorMessage,
      cardExpiration,
      cardOwner,
      cardCvc,
      cardPassword,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const value = {
    cardNumber,
    cardNumberErrorMessage,
    cardExpirationErrorMessage,
    cardExpiration,
    cardOwner,
    cardCvc,
    cardPassword,
    dispatch,
  };

  return (
    <div className="App">
      <CardContext.Provider value={value}>
        <CardAddition />
      </CardContext.Provider>
    </div>
  );
}

export default App;
