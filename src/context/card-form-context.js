import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  firstCardNumber: '',
  secondCardNumber: '',
  thirdCardNumber: '',
  fourthCardNumber: '',
  isCardNumberInputCompleted: false,
  ownerName: '',
  isOwnerNameInputCompleted: true,
  secureCode: '',
  isSecureCodeInputCompleted: false,
  expiredMonth: '',
  expiredYear: '',
  isExpiredDateInputCompleted: false,
  firstPassword: '',
  secondPassword: '',
  isPasswordInputCompleted: false,
  cardType: {
    color: 'red',
    name: '',
  },
};

const CardFormContext = createContext(initialState);

const cardFormReducer = (state, action) => {
  switch (action.type) {
    case 'complete-input-card-numbers': {
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
        isCardNumberInputCompleted: true,
      };
    }
    case 'incomplete-input-card-numbers': {
      return { ...state, isCardNumberInputCompleted: false };
    }
    case 'complete-input-owner-name': {
      return {
        ...state,
        ownerName: action.data.ownerName,
        isOwnerNameInputCompleted: true,
      };
    }
    case 'incomplete-input-owner-name': {
      return { ...state, isOwnerNameInputCompleted: false };
    }
    case 'complete-input-secure-code': {
      return {
        ...state,
        secureCode: action.data.secureCode,
        isSecureCodeInputCompleted: true,
      };
    }
    case 'incomplete-input-secure-code': {
      return {
        ...state,
        isSecureCodeInputCompleted: false,
      };
    }

    case 'complete-input-expired-date': {
      const { expiredMonth, expiredYear } = action.data;
      return {
        ...state,
        expiredMonth,
        expiredYear,
        isExpiredDateInputCompleted: true,
      };
    }

    case 'incomplete-input-expired-date': {
      return {
        ...state,
        isExpiredDateInputCompleted: false,
      };
    }

    case 'complete-input-password': {
      const { firstPassword, secondPassword } = action.data;
      return {
        ...state,
        firstPassword,
        secondPassword,
        isPasswordInputCompleted: true,
      };
    }

    case 'incomplete-input-password': {
      return {
        ...state,
        isPasswordInputCompleted: false,
      };
    }

    case 'complete-select-cardType': {
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

export { CardFormProvider, useCardFormContext };
