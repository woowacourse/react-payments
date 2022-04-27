import React, { useReducer } from 'react';
import Card from './components/Card';
import InputForm from './components/InputForm';
const cardInputReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CHANGE_CARD_NUMBER': {
      const { key, cardNumber } = payload;
      return {
        ...state,
        cardNumber: { ...state.cardNumber, [`${key}`]: cardNumber },
      };
    }
    case 'CHANGE_EXPIRATION_DATE': {
      const { key, date } = payload;
      return {
        ...state,
        expirationDate: { ...state.expirationDate, [`${key}`]: date },
      };
    }

    case 'CHANGE_OWNER_NAME': {
      const { ownerName } = payload;
      return {
        ...state,
        ownerName,
      };
    }
    case 'CHANGE_SECURITY_CODE': {
      const { securityCode } = payload;
      return {
        ...state,
        securityCode: securityCode,
      };
    }
    case 'CHANGE_PASSWORD': {
      const { key, password } = payload;
      return {
        ...state,
        password: { ...state.password, [`${key}`]: password },
      };
    }
    default:
      throw new Error();
  }
};

const defaultCardInputState = {
  cardNumber: {
    first: '',
    second: '',
    third: '',
    forth: '',
  },
  expirationDate: {
    month: '',
    year: '',
  },
  ownerName: '',
  securityCode: '',
  password: {
    first: '',
    second: '',
  },
};
function App() {
  const [cardInput, cardInputDispatch] = useReducer(cardInputReducer, defaultCardInputState);

  return (
    <div className="root">
      <div className="app">
        <h2 className="page-title"> 카드 추가 </h2>
        <Card cardInformation={cardInput}></Card>
        <InputForm cardInput={cardInput} cardInputDispatch={cardInputDispatch}></InputForm>
      </div>
    </div>
  );
}

export default App;
