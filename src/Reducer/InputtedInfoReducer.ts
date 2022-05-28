import { CardData } from 'types/Card';
import { ExpiredInput, NumberInput, PasswordsInput } from 'types/SomeInput';

type InputAction =
  | { type: 'CARD_NUMBER'; value: NumberInput<string>; valid: boolean }
  | { type: 'EXPIRED_DATE'; value: ExpiredInput<string>; valid: boolean }
  | { type: 'OWNER_NAME'; value: string; valid: boolean }
  | { type: 'SECURITY_NUMBER'; value: string; valid: boolean }
  | { type: 'PASSWORD'; value: PasswordsInput<string>; valid: boolean }
  | { type: 'CARD_NAME'; value: string; valid: boolean }
  | { type: 'EQUALIZE'; value: CardData }
  | { type: 'CLEAR' };

const INPUT_ACTION = {
  CARD_NUMBER: 'CARD_NUMBER',
  EXPIRED_DATE: 'EXPIRED_DATE',
  OWNER_NAME: 'OWNER_NAME',
  SECURITY_NUMBER: 'SECURITY_NUMBER',
  PASSWORD: 'PASSWORD',
  CARD_NAME: 'CARD_NAME',
  EQUALIZE: 'EQUALIZE',
  CLEAR: 'CLEAR',
} as const;

const initialInputtedInfo: CardData = {
  cardNumber: { value: null, isValid: false },
  expiredDate: { value: null, isValid: false },
  ownerName: { value: null, isValid: false },
  securityNumber: { value: null, isValid: false },
  password: { value: null, isValid: false },
  cardName: { value: null, isValid: true },
};

function inputtedInfoReducer(state: CardData, action: InputAction): CardData {
  switch (action.type) {
    case INPUT_ACTION.CARD_NUMBER:
      return {
        ...state,
        cardNumber: {
          value: action.value,
          isValid: action.valid,
        },
      };
    case INPUT_ACTION.EXPIRED_DATE:
      return {
        ...state,
        expiredDate: {
          value: action.value,
          isValid: action.valid,
        },
      };
    case INPUT_ACTION.OWNER_NAME:
      return {
        ...state,
        ownerName: {
          value: action.value,
          isValid: action.valid,
        },
      };
    case INPUT_ACTION.SECURITY_NUMBER:
      return {
        ...state,
        securityNumber: {
          value: action.value,
          isValid: action.valid,
        },
      };
    case INPUT_ACTION.PASSWORD:
      return {
        ...state,
        password: {
          value: action.value,
          isValid: action.valid,
        },
      };
    case INPUT_ACTION.CARD_NAME:
      return {
        ...state,
        cardName: {
          value: action.value,
          isValid: action.valid,
        },
      };
    case INPUT_ACTION.EQUALIZE:
      return action.value;
    case INPUT_ACTION.CLEAR:
      return initialInputtedInfo;
  }
}

export { inputtedInfoReducer, initialInputtedInfo, INPUT_ACTION, InputAction };
