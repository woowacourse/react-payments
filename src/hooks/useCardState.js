import { useReducer } from 'react';

const initialState = {
  cardName: '',
  companyId: '',
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
        const newCardNumber = [...newState.cardNumber];

        newCardNumber[index] = cardNumberFormatter(value);
        newState.cardNumber = newCardNumber;
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
  delete necessaryInputState.cardName;

  return Object.entries(necessaryInputState).every(([_, value]) => value !== '');
};

const useCardState = () => {
  const [cardState, dispatch] = useReducer(reducer, initialState);
  const isComplete = isInputComplete(cardState);

  const onChangeCardState = ({ currentTarget }, option = {}) => {
    const { name: textFieldName, value: textFieldValue } = currentTarget;

    switch (textFieldName) {
      case 'cardNumber':
        dispatch({
          type: textFieldName,
          contents: { index: option.index, value: textFieldValue },
        });
        break;

      default:
        dispatch({
          type: textFieldName,
          contents: textFieldValue,
        });
    }
  };

  return { state: { ...cardState, isComplete }, onChangeCardState };
};

export default useCardState;
