/**
 * Reducer가 무엇인지 체험해 보려고 짜본 코드입니다.
 * 실제 프로젝트에서 사용되지는 않았습니다.
 */
import { createContext, useReducer } from 'react';
import { saveCardToLocalStorage } from '../domains/cardLocalStorage';
import type { FormInputValueType, CardIssuerType, CardInfo } from '../types';

type CardInfoState = {
  cardIssuer: CardIssuerType;
  cardNumber: FormInputValueType;
  cardOwnerName: FormInputValueType;
  cardPassword: FormInputValueType;
  cardSecurityCode: FormInputValueType;
  cardExpirationDate: FormInputValueType;
  hasCheckedValidation: boolean;
};

type CardInfoAction =
  | { type: 'SET_CARD_ISSUER'; cardIssuer: CardIssuerType }
  | { type: 'SET_CARD_NUMBER'; cardNumber: FormInputValueType }
  | { type: 'SET_CARD_OWNER_NAME'; cardOwnerName: FormInputValueType }
  | { type: 'SET_CARD_PASSWORD'; cardPassword: FormInputValueType }
  | { type: 'SET_CARD_SECURITY_CODE'; cardSecurityCode: FormInputValueType }
  | { type: 'SET_CARD_EXPIRATION_DATE'; cardExpirationDate: FormInputValueType }
  | { type: 'SET_HAS_CHECKED_VALIDATION'; hasChecked: boolean }
  | { type: 'RESET' };

const emptyFormInputValue = { isValid: false, value: '' };

const CardInfoContext = createContext<{
  state: CardInfoState;
  dispatch: React.Dispatch<CardInfoAction>;
  reset: () => void;
  saveCard: (cardInfo: CardInfo) => void;
}>({
  state: {
    cardIssuer: 'BC카드',
    cardNumber: emptyFormInputValue,
    cardOwnerName: emptyFormInputValue,
    cardPassword: emptyFormInputValue,
    cardSecurityCode: emptyFormInputValue,
    cardExpirationDate: emptyFormInputValue,
    hasCheckedValidation: false,
  },
  reset: () => {},
  dispatch: () => {},
  saveCard: () => {},
});

const initialState: CardInfoState = {
  cardIssuer: 'BC카드',
  cardNumber: emptyFormInputValue,
  cardOwnerName: { isValid: true, value: '' },
  cardPassword: emptyFormInputValue,
  cardSecurityCode: emptyFormInputValue,
  cardExpirationDate: emptyFormInputValue,
  hasCheckedValidation: false,
};

const cardInfoReducer = (state: CardInfoState, action: CardInfoAction): CardInfoState => {
  switch (action.type) {
    case 'SET_CARD_ISSUER':
      return { ...state, cardIssuer: action.cardIssuer };
    case 'SET_CARD_NUMBER':
      return { ...state, cardNumber: action.cardNumber };
    case 'SET_CARD_OWNER_NAME':
      return { ...state, cardOwnerName: action.cardOwnerName };
    case 'SET_CARD_PASSWORD':
      return { ...state, cardPassword: action.cardPassword };
    case 'SET_CARD_SECURITY_CODE':
      return { ...state, cardSecurityCode: action.cardSecurityCode };
    case 'SET_CARD_EXPIRATION_DATE':
      return { ...state, cardExpirationDate: action.cardExpirationDate };
    case 'SET_HAS_CHECKED_VALIDATION':
      return { ...state, hasCheckedValidation: action.hasChecked };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

interface CardInfoProviderProps {
  children?: React.ReactNode;
}

const CardInfoProvider = ({ children }: CardInfoProviderProps) => {
  const [state, dispatch] = useReducer(cardInfoReducer, initialState);

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  const saveCard = (cardInfo: CardInfo) => {
    saveCardToLocalStorage(cardInfo);
    reset();
  };

  return (
    <CardInfoContext.Provider
      value={{
        state,
        dispatch,
        reset,
        saveCard,
      }}
    >
      {children}
    </CardInfoContext.Provider>
  );
};

export { CardInfoContext, CardInfoProvider };
