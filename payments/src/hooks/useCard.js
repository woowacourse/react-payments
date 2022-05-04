import { useReducer } from 'react';

const reducer = (state, action) => {
  let refinedPayloadValue;

  const blockCharacter = (value) => {
    return value.replace(/[^\d]/g, '').replace('.', '');
  };

  const limitExceptUpperCase = (value) => {
    return value
      .replace(/[^A-Za-z\s]*/g, '')
      .replace('.', '')
      .toUpperCase();
  };

  switch (action.type) {
    case 'cardNumber':
      refinedPayloadValue = blockCharacter(action.payload.value);
      return {
        ...state,
        cardNumber: [
          ...state.cardNumber.slice(0, action.payload.index),
          refinedPayloadValue,
          ...state.cardNumber.slice(action.payload.index + 1),
        ],
      };
    case 'expiredDate':
      refinedPayloadValue = blockCharacter(action.payload.value);
      return {
        ...state,
        expiredDate: [
          ...state.expiredDate.slice(0, action.payload.index),
          refinedPayloadValue,
          ...state.expiredDate.slice(action.payload.index + 1),
        ],
      };
    case 'ownerName':
      refinedPayloadValue = limitExceptUpperCase(blockCharacter(action.payload.value));
      return {
        ...state,
        ownerName: refinedPayloadValue,
      };
    case 'secureCode':
      refinedPayloadValue = blockCharacter(action.payload.value);
      return {
        ...state,
        secureCode: refinedPayloadValue,
      };
    case 'password':
      refinedPayloadValue = blockCharacter(action.payload.value);
      return {
        ...state,
        password: [
          ...state.password.slice(0, action.payload.index),
          refinedPayloadValue,
          ...state.password.slice(action.payload.index + 1),
        ],
      };
    case 'pickColor':
      return {
        ...state,
        color: action.payload.color,
        cardName: action.payload.cardName,
      };
    default:
      return state;
  }
};

const useCard = () => {
  const initState = {
    cardNumber: ['', '', '', ''],
    expiredDate: ['', ''],
    ownerName: '',
    secureCode: '',
    password: ['', ''],
    cardName: '',
    color: '#d2d2d2',
  };
  const [form, dispatch] = useReducer(reducer, initState);

  return [form, dispatch];
};

export default useCard;
