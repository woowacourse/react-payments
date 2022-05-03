import { useEffect, useReducer, useState } from 'react';

const initialState = {
  cardNumber: ['', '', '', ''],
  expireMonth: '',
  expireYear: '',
  userName: '',
  securityCode: '',
  cardPassword: '',
};

const cardNumberFormatter = (cardNumber) => cardNumber.replace(/[^0-9]{1,4}$/g, '').slice(0, 4);

function reducer(state, { type, contents }) {
  const newState = { ...state };

  switch (type) {
    case 'cardNumber':
      {
        const { index, value } = contents;
        newState.cardNumber[index] = cardNumberFormatter(value);
      }
      break;

    case 'userName':
      newState.userName = contents.toUpperCase();
      break;

    default:
      newState[type] = contents;
      break;
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

  const onChangeTextField = ({ target }, option = {}) => {
    const textFieldName = target.name;

    switch (textFieldName) {
      case 'cardNumber':
        dispatch({
          type: textFieldName,
          contents: { index: option.index, value: target.value },
        });
        break;

      default:
        dispatch({
          type: textFieldName,
          contents: target.value,
        });
    }
  };

  return { state: { ...cardState, isComplete }, onChangeTextField };
};

export default useCardState;
