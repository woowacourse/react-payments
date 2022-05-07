import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  firstCardNumber: '',
  secondCardNumber: '',
  thirdCardNumber: '',
  fourthCardNumber: '',
  ownerName: '',
  secureCode: '',
  expiredMonth: '',
  expiredYear: '',
  firstPassword: '',
  secondPassword: '',
  cardType: {
    color: 'red',
    name: '',
  },
};

const ACTION = {
  CARD_NUMBERS: 'CARD_NUMBERS',
  OWNER_NAME: 'OWNER_NAME',
  SECURE_CODE: 'SECURE_CODE',
  EXPIRED_DATE: 'EXPIRED_DATE',
  PASSWORD: 'PASSWORD',
  CARD_TYPE: 'CARD_TYPE',
};

const CardFormContext = createContext(initialState);

const cardFormReducer = (state, action) => {
  switch (action.type) {
    case ACTION.CARD_NUMBERS: {
      const {
        firstCardNumber,
        secondCardNumber,
        thirdCardNumber,
        fourthCardNumber,
      } = action.data;
      return {
        ...state,
        firstCardNumber,
        secondCardNumber,
        thirdCardNumber,
        fourthCardNumber,
      };
    }
    case ACTION.OWNER_NAME: {
      return {
        ...state,
        ownerName: action.data.ownerName,
      };
    }
    case ACTION.SECURE_CODE: {
      return {
        ...state,
        secureCode: action.data.secureCode,
      };
    }
    case ACTION.EXPIRED_DATE: {
      const { expiredMonth, expiredYear } = action.data;
      return {
        ...state,
        expiredMonth,
        expiredYear,
      };
    }

    case ACTION.PASSWORD: {
      const { firstPassword, secondPassword } = action.data;
      return {
        ...state,
        firstPassword,
        secondPassword,
      };
    }
    case ACTION.CARD_TYPE: {
      return {
        ...state,
        cardType: action.data.cardType,
      };
    }
  }
};

const CardFormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cardFormReducer, initialState);

  const value = { state, dispatch };

  return (
    <CardFormContext.Provider value={value}>
      {children}
    </CardFormContext.Provider>
  );
};

const useCardFormContext = () => {
  const context = useContext(CardFormContext);
  return context;
};

CardFormProvider.propTypes = {
  children: PropTypes.element,
};

export { CardFormProvider, useCardFormContext, ACTION };
