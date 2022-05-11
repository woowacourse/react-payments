import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  firstCardNumber: '',
  secondCardNumber: '',
  thirdCardNumber: '',
  fourthCardNumber: '',
  isInitialCardNumber: true,
  isCardNumberError: false,
  ownerName: '',
  isInitialOwnerName: true,
  isOwnerNameError: false,
  secureCode: '',
  isInitialSecureCode: true,
  isSecureCodeError: false,
  expiredMonth: '',
  expiredYear: '',
  isInitialExpiredDate: true,
  isExpiredDateError: false,
  firstPassword: '',
  secondPassword: '',
  isInitialPassword: true,
  isPasswordError: false,
  cardType: '',
  isCardTypeSelected: false,
};

const ACTION = {
  SET_CARD_NUMBERS: 'SET_CARD_NUMBERS',
  SET_CARD_NUMBERS_ERROR: 'SET_CARD_NUMBERS_ERROR',
  SET_OWNER_NAME: 'SET_OWNER_NAME',
  SET_OWNER_NAME_ERROR: 'SET_OWNER_NAME_ERROR',
  SET_SECURE_CODE: 'SET_SECURE_CODE',
  SET_SECURE_CODE_ERROR: 'SET_SECURE_CODE_ERROR',
  SET_EXPIRED_DATE: 'SET_EXPIRED_DATE',
  SET_EXPIRED_DATE_ERROR: 'SET_EXPIRED_DATE_ERROR',
  SET_PASSWORD: 'SET_PASSWORD',
  SET_PASSWORD_ERROR: 'SET_PASSWORD_ERROR',
  SET_CARD_TYPE: 'SET_CARD_TYPE',
};

const CardFormContext = createContext(initialState);

const cardFormReducer = (state, action) => {
  switch (action.type) {
    case ACTION.SET_CARD_NUMBERS: {
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
        isInitialCardNumber: false,
        isCardNumberError: false,
      };
    }
    case ACTION.SET_CARD_NUMBERS_ERROR: {
      return { ...state, isCardNumberError: true };
    }
    case ACTION.SET_OWNER_NAME: {
      return {
        ...state,
        ownerName: action.data.ownerName,
        isInitialOwnerName: false,
        isOwnerNameError: false,
      };
    }
    case ACTION.SET_OWNER_NAME_ERROR: {
      return {
        ...state,
        isOwnerNameError: true,
      };
    }
    case ACTION.SET_SECURE_CODE: {
      return {
        ...state,
        secureCode: action.data.secureCode,
        isInitialSecureCode: false,
        isSecureCodeError: false,
      };
    }
    case ACTION.SET_SECURE_CODE_ERROR: {
      return {
        ...state,
        isSecureCodeError: true,
      };
    }
    case ACTION.SET_EXPIRED_DATE: {
      const { expiredMonth, expiredYear } = action.data;
      return {
        ...state,
        expiredMonth,
        expiredYear,
        isInitialExpiredDate: false,
        isExpiredDateError: false,
      };
    }

    case ACTION.SET_EXPIRED_DATE_ERROR: {
      return {
        ...state,
        isExpiredDateError: true,
      };
    }
    case ACTION.SET_PASSWORD: {
      const { firstPassword, secondPassword } = action.data;
      return {
        ...state,
        firstPassword,
        secondPassword,
        isInitialPassword: false,
      };
    }
    case ACTION.SET_PASSWORD_ERROR: {
      return {
        isPasswordError: true,
      };
    }
    case ACTION.SET_CARD_TYPE: {
      return {
        ...state,
        cardType: action.data.cardType,
        isCardTypeSelected: true,
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
