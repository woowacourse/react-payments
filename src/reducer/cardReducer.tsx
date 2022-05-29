import type { IInitialState } from "../types/cardInfoState";

interface ISetCardNumberPayload {
  value: string;
  cardNumberOrder: string;
}

interface ISetExpireDatePayload {
  value: string;
  dateType: string;
}

interface ISetHolderNamePayload {
  value: string;
}

interface ISetSecurityCodePayload {
  value: string;
}

interface ISetPasswordPayload {
  value: string;
  passwordOrder: string;
}

interface ISetCardAliasPayload {
  value: string;
}

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

export const setCardNumber = (payload: ISetCardNumberPayload) => ({
  type: CARD_NUMBER,
  payload,
});

export const setExpireDate = (payload: ISetExpireDatePayload) => ({
  type: EXPIRE_DATE,
  payload,
});

export const setHolderName = (payload: ISetHolderNamePayload) => ({
  type: HOLDER_NAME,
  payload,
});

export const setSecurityCode = (payload: ISetSecurityCodePayload) => ({
  type: SECURITY_CODE,
  payload,
});

export const setPassword = (payload: ISetPasswordPayload) => ({
  type: PASSWORD,
  payload,
});

export const setCardAlias = (payload: ISetCardAliasPayload) => ({
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
          [action.payload.cardNumberOrder]: action.payload.value,
        },
      };

    case EXPIRE_DATE:
      return {
        ...state,
        expireDate: {
          ...state.expireDate,
          [action.payload.dateType]: action.payload.value,
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
          [action.payload.passwordOrder]: action.payload.value,
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
