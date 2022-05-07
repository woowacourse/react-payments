import { useReducer } from 'react';

import { CARD_NUMBER, USER_NAME } from 'constants';

const initialState = {
  companyName: '티거 카드 🐯',
  cardNumber: ['', '', '', ''],
  expireMonth: '',
  expireYear: '',
  userName: '',
  securityCode: '',
  cardPassword: '',
};

const formatCardNumber = (cardNumber) => cardNumber.replace(/[^0-9]/g, '');

function reducer(state, { type, contents }) {
  const newState = { ...state };

  switch (type) {
    case CARD_NUMBER.TEXT_FIELD_NAME: {
      const { index, value } = contents;
      newState.cardNumber[index] = formatCardNumber(value);
      break;
    }
    case USER_NAME.TEXT_FIELD_NAME: {
      newState.userName = contents.toUpperCase();
      break;
    }
    default:
      newState[type] = contents;
  }

  return newState;
}

const isInputComplete = (state) => {
  const necessaryInputState = { ...state };

  delete necessaryInputState.userName;

  return Object.entries(necessaryInputState).every(([_, value]) => value !== '');
};

const useCardState = () => {
  const [cardState, dispatch] = useReducer(reducer, initialState);
  const isComplete = isInputComplete(cardState);

  return [{ ...cardState, isComplete }, dispatch];
};

export default useCardState;
