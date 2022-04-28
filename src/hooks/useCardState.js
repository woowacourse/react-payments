import { useEffect, useReducer, useState } from 'react';
import { ACTION_TYPE, CARD_NUMBER } from 'constants';

const initialState = {
  cardNumber: '',
  expireMonth: '',
  expireYear: '',
  userName: '',
  securityCode: '',
  cardPassword: '',
};

const cardNumberFormatter = (cardNumber) =>
  cardNumber
    .match(new RegExp(`[0-9]{1,${CARD_NUMBER.UNIT_LENGTH}}`, 'g'))
    ?.filter((_, index) => index < CARD_NUMBER.UNIT_LENGTH)
    ?.join('-');

function reducer(state, { type, contents }) {
  const newState = { ...state };
  const updateState = {
    [ACTION_TYPE.UPDATE_CARD_NUMBER]: () => {
      newState.cardNumber = cardNumberFormatter(contents);
    },
    [ACTION_TYPE.UPDATE_EXPIRE_MONTH]: () => {
      newState.expireMonth = contents;
    },
    [ACTION_TYPE.UPDATE_EXPIRE_YEAR]: () => {
      newState.expireYear = contents;
    },
    [ACTION_TYPE.UPDATE_USER_NAME]: () => {
      newState.userName = contents.toUpperCase();
    },
    [ACTION_TYPE.UPDATE_SECURITY_CODE]: () => {
      newState.securityCode = contents;
    },
    [ACTION_TYPE.UPDATE_CARD_PASSWORD]: () => {
      newState.cardPassword = contents;
    },
  };

  updateState[type]();

  return newState;
}

const isInputComplete = (state) => {
  const necessaryInputState = { ...state };

  delete necessaryInputState.userName;

  return Object.entries(necessaryInputState).every(([_, value]) => value !== '');
};

const useCardState = () => {
  const [cardState, dispatch] = useReducer(reducer, initialState);
  const [isComplete, setComplete] = useState(false);

  useEffect(() => {
    setComplete(isInputComplete(cardState));
  }, [cardState]);

  return [{ ...cardState, isComplete }, dispatch];
};

export default useCardState;
