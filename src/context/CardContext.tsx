import { createContext, Dispatch, PropsWithChildren, useReducer } from 'react';

type CardStateType = {
  cardNumber: string;
  expirationDate: string;
  cardOwnerName: string;
  securityCode: string;
  firstDigit: string;
  secondDigit: string;
  selectedCard: string;
  cardNickName: string;
};

type CardActionType =
  | { type: 'SET_CARD_NUMBER'; parameter: string }
  | { type: 'SET_EXPIRATION_DATE'; parameter: string }
  | { type: 'SET_CARD_OWNER_NAME'; parameter: string }
  | { type: 'SET_SECURITY_CODE'; parameter: string }
  | { type: 'SET_FIRST_DIGIT'; parameter: string }
  | { type: 'SET_SECOND_DIGIT'; parameter: string }
  | { type: 'SET_SELECTED_CARD'; parameter: string }
  | { type: 'SET_CARD_NICK_NAME'; parameter: string }
  | { type: 'RESET_CARD_STATE' };

const initialState: CardStateType = {
  cardNumber: '',
  expirationDate: '',
  cardOwnerName: '',
  securityCode: '',
  firstDigit: '',
  secondDigit: '',
  selectedCard: '',
  cardNickName: '',
};

export const CardStateContext = createContext<CardStateType | null>(null);

export const CardDispatchContext = createContext<Dispatch<CardActionType> | null>(null);

const cardReducer = (state: CardStateType, action: CardActionType) => {
  switch (action.type) {
    case 'SET_CARD_NUMBER':
      return { ...state, cardNumber: action.parameter };
    case 'SET_EXPIRATION_DATE':
      return { ...state, expirationDate: action.parameter };
    case 'SET_CARD_OWNER_NAME':
      return { ...state, cardOwnerName: action.parameter };
    case 'SET_SECURITY_CODE':
      return { ...state, securityCode: action.parameter };
    case 'SET_FIRST_DIGIT':
      return { ...state, firstDigit: action.parameter };
    case 'SET_SECOND_DIGIT':
      return { ...state, secondDigit: action.parameter };
    case 'SET_SELECTED_CARD':
      return { ...state, selectedCard: action.parameter };
    case 'SET_CARD_NICK_NAME':
      return { ...state, cardNickName: action.parameter };
    case 'RESET_CARD_STATE':
      return initialState;
    default:
      return state;
  }
};

export const CardProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [state, dispatch] = useReducer(cardReducer, initialState);

  return (
    <CardStateContext.Provider value={state}>
      <CardDispatchContext.Provider value={dispatch}>{children}</CardDispatchContext.Provider>
    </CardStateContext.Provider>
  );
};
