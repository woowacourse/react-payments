import {
  CardExpirationDateInput,
  CardInput,
  CardNumberInput,
  CardPasswordTypeInput,
  CardType,
} from '@/types/Card';
import { useCallback, useReducer } from 'react';
import { INPUT_ELEMENT_KEY_SEPARATOR } from '../utils/constants';
export const enum CardInputReducerActionType {
  CHANGE_CARD_NUMBER = 'CHANGE_CARD_NUMBER',
  CHANGE_EXPIRATION_DATE = 'CHANGE_EXPIRATION_DATE',
  CHANGE_OWNER_NAME = 'CHANGE_OWNER_NAME',
  CHANGE_PASSWORD_TYPE_INPUT_VALUE = 'CHANGE_PASSWORD_TYPE_INPUT_VALUE',
  CHANGE_CARD_COMPANY = 'CHANGE_CARD_COMPANY',
}

interface ChangeCardNumberAction {
  type: CardInputReducerActionType.CHANGE_CARD_NUMBER;
  payload: {
    key: keyof CardNumberInput;
    cardNumber: string;
  };
}

interface ChangeExpirationDateAction {
  type: CardInputReducerActionType.CHANGE_EXPIRATION_DATE;
  payload: {
    key: keyof CardExpirationDateInput;
    date: string;
  };
}

interface ChangeOwnerNameAction {
  type: CardInputReducerActionType.CHANGE_OWNER_NAME;
  payload: {
    ownerName: string;
  };
}

interface ChangePasswordTypeInputValueAction {
  type: CardInputReducerActionType.CHANGE_PASSWORD_TYPE_INPUT_VALUE;
  payload: {
    elementKey: CardPasswordTypeInput;
    value: string;
  };
}

interface ChangeCardCompanyAction {
  type: CardInputReducerActionType.CHANGE_CARD_COMPANY;
  payload: {
    cardType: CardType;
  };
}

type CardInputReducerAction =
  | ChangeCardNumberAction
  | ChangeExpirationDateAction
  | ChangeOwnerNameAction
  | ChangePasswordTypeInputValueAction
  | ChangeCardCompanyAction;

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
  cardType: null,
};

export type CardInputState = CardInput;
export type CardInputDispatch = React.Dispatch<CardInputReducerAction>;
export type GetInputState = (key: string) => string;

const cardInputReducer = (state: CardInput, action: CardInputReducerAction) => {
  const { type } = action;

  switch (type) {
    case 'CHANGE_CARD_NUMBER': {
      const {
        payload: { key, cardNumber },
      } = action;
      return {
        ...state,
        cardNumber: { ...state.cardNumber, [`${key}`]: cardNumber },
      };
    }

    case 'CHANGE_EXPIRATION_DATE': {
      const {
        payload: { key, date },
      } = action;
      return {
        ...state,
        expirationDate: { ...state.expirationDate, [`${key}`]: date },
      };
    }

    case 'CHANGE_OWNER_NAME': {
      const {
        payload: { ownerName },
      } = action;
      return {
        ...state,
        ownerName,
      };
    }

    case 'CHANGE_PASSWORD_TYPE_INPUT_VALUE': {
      const {
        payload: { elementKey, value },
      } = action;
      const [stateName, stateKey] = elementKey.split(INPUT_ELEMENT_KEY_SEPARATOR);

      if (stateKey) {
        return { ...state, [`${stateName}`]: { ...state[stateName], [`${stateKey}`]: value } };
      }

      return { ...state, [`${stateName}`]: value };
    }

    case 'CHANGE_CARD_COMPANY': {
      const {
        payload: { cardType },
      } = action;
      return { ...state, cardType };
    }

    default:
      throw new Error();
  }
};

export const useCardInput = (
  card?: CardInput,
): [CardInputState, CardInputDispatch, GetInputState] => {
  const [cardInput, cardInputDispatch] = useReducer(
    cardInputReducer,
    card || defaultCardInputState,
  );

  const getInputState = useCallback(
    (key) => {
      const [stateName, stateKey] = key.split(INPUT_ELEMENT_KEY_SEPARATOR);

      if (!stateKey) {
        return cardInput[stateName];
      }

      return cardInput[stateName][stateKey];
    },
    [cardInput],
  );

  return [cardInput, cardInputDispatch, getInputState];
};
