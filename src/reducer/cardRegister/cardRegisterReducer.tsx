import { CardRegisterInfo } from '../../types/card.type';
import { CardRegisterAction } from './cardRegisterAction';

export const initialCardRegisterInfo = {
  cardNumber: {
    first: '',
    second: '',
    third: '',
    fourth: '',
  },
  expirationDate: {
    month: '',
    year: '',
  },
  holderName: '',
  cvc: '',
  password: {
    passwordFirstDigit: '',
    passwordSecondDigit: '',
  },
  bank: {},
  alias: '우아한 카드',
};

export function cardRegisterReducer(state: CardRegisterInfo, action: CardRegisterAction): CardRegisterInfo {
  switch (action.type) {
    case 'INIT_CARD_REGISTER': {
      return initialCardRegisterInfo;
    }
    case 'UPDATE_CARD_NUMBER': {
      const { field, value } = action.payload;

      return {
        ...state,
        cardNumber: {
          ...state.cardNumber,
          [field]: value,
        },
      };
    }
    case 'UPDATE_EXPIRATION_DATE': {
      const { field, value } = action.payload;

      return {
        ...state,
        expirationDate: {
          ...state.expirationDate,
          [field]: value,
        },
      };
    }
    case 'UPDATE_HOLDER_NAME': {
      const { value: holderName } = action.payload;

      return {
        ...state,
        holderName,
      };
    }
    case 'UPDATE_CVC': {
      const { value: cvc } = action.payload;

      return {
        ...state,
        cvc,
      };
    }
    case 'UPDATE_PASSWORD': {
      const { field, value } = action.payload;

      return {
        ...state,
        password: {
          ...state.password,
          [field]: value,
        },
      };
    }
    case 'UPDATE_ALIAS': {
      const { value: alias } = action.payload;

      return {
        ...state,
        alias,
      };
    }
    case 'UPDATE_BANK': {
      const { value: bank } = action.payload;
      return {
        ...state,
        bank,
      };
    }

    default:
      return state;
  }
}
