import type { IInitialState } from "../types/cardInfoState";

const CARD_NUMBER = "CARD_NUMBER";
const EXPIRE_DATE = "EXPIRE_DATE";
const HOLDER_NAME = "HOLDER_NAME";
const SECURITY_CODE = "SECURITY_CODE";
const PASSWORD = "PASSWORD";
const CARD_ALIAS = "CARD_ALIAS";
const INITIAL_STATE = "INITIAL_STATE";

export const initialState: IInitialState = {
  cardNumber: {
    firstCardNumber: "",
    secondCardNumber: "",
    thirdCardNumber: "",
    fourthCardNumber: "",
  },
  expireDate: {
    month: "",
    year: "",
  },
  holderName: "",
  securityCode: "",
  password: {
    firstPassword: "",
    secondPassword: "",
  },
  cardAlias: "",
};

export const setCardNumber = <T extends unknown>(payload: T) => ({
  type: CARD_NUMBER,
  payload,
});

export const setExpireDate = <T extends unknown>(payload: T) => ({
  type: EXPIRE_DATE,
  payload,
});

export const setHolderName = <T extends unknown>(payload: T) => ({
  type: HOLDER_NAME,
  payload,
});

export const setSecurityCode = <T extends unknown>(payload: T) => ({
  type: SECURITY_CODE,
  payload,
});

export const setPassword = <T extends unknown>(payload: T) => ({
  type: PASSWORD,
  payload,
});

export const setCardAlias = <T extends unknown>(payload: T) => ({
  type: CARD_ALIAS,
  payload,
});

export const setInitialState = () => ({ type: INITIAL_STATE });

export const reducer = (state = initialState, action: any): IInitialState => {
  switch (action.type) {
    case CARD_NUMBER:
      return {
        ...state,
        cardNumber: {
          ...state.cardNumber,
          [action.payload.type]: action.payload.value,
        },
      };

    case EXPIRE_DATE:
      return {
        ...state,
        expireDate: {
          ...state.expireDate,
          [action.payload.type]: action.payload.value,
        },
      };

    case HOLDER_NAME:
      return {
        ...state,
        holderName: action.payload.value.toUpperCase(),
      };

    case SECURITY_CODE:
      return {
        ...state,
        securityCode: action.payload.value,
      };

    case PASSWORD:
      return {
        ...state,
        password: {
          ...state.password,
          [action.payload.type]: action.payload.value,
        },
      };

    case CARD_ALIAS:
      return {
        ...state,
        cardAlias: action.payload.value,
      };

    case INITIAL_STATE:
      return {
        cardNumber: {
          firstCardNumber: "",
          secondCardNumber: "",
          thirdCardNumber: "",
          fourthCardNumber: "",
        },
        expireDate: {
          month: "",
          year: "",
        },
        holderName: "",
        securityCode: "",
        password: {
          firstPassword: "",
          secondPassword: "",
        },
        cardAlias: "",
      };

    default:
      return state;
  }
};
