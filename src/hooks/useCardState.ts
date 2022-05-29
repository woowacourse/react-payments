import { useReducer } from 'react';

import { ArrayContents, CardState, Payload } from '@/types';
import { CARD_NUMBER, USER_NAME } from '@/constants';

const initialState = {
  cardNumber: ['', '', '', ''],
  expireMonth: '',
  expireYear: '',
  userName: '',
  securityCode: '',
  cardPassword: '',
};

const formatCardNumber = (cardNumber: string) => cardNumber.replace(/[^0-9]/g, '');

function reducer(state: CardState, { type, contents }: Payload) {
  const newState = { ...state };

  switch (type) {
    case CARD_NUMBER.TEXT_FIELD_NAME: {
      const { index, value } = contents as ArrayContents;
      newState.cardNumber[index] = formatCardNumber(value);
      break;
    }
    case USER_NAME.TEXT_FIELD_NAME: {
      newState.userName = (contents as string).toUpperCase();
      break;
    }
    default:
      newState[type] = contents as string;
  }

  return newState;
}

const isInputComplete = (state: CardState) => {
  const necessaryInputState = { ...state };

  delete necessaryInputState.userName;

  const inputComplete = Object.entries(necessaryInputState).every(([key, value]) => {
    if (key === CARD_NUMBER.TEXT_FIELD_NAME) {
      return (value as string[]).every((unit) => unit !== '');
    }

    return (value as string) !== '';
  });

  return inputComplete;
};

const useCardState = () => {
  const [cardState, dispatch] = useReducer(reducer, initialState);
  const isComplete = isInputComplete(cardState);

  return [{ ...cardState, isComplete }, dispatch];
};

export default useCardState;
