import { useReducer } from 'react';

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

export const useCardInput = () => {
  return useReducer(cardInputReducer, defaultCardInputState);
};
