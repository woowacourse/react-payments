import { useState } from 'react';
import {
  PARSE_RULE,
  CARD_PASSWORD_RULE,
  ERROR_MESSAGE,
} from '../constants/cardPassword';

const useCardPassword = () => {
  const [cardPassword, setCardPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onChangeCardPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const isNumeric = value === '' || /^[0-9]+$/.test(value);
    if (!isNumeric) {
      return;
    }

    if (value.length > PARSE_RULE.length) {
      return;
    }

    const isNotValid =
      value.length < PARSE_RULE.length ||
      value.length > PARSE_RULE.length ||
      Number(value) < CARD_PASSWORD_RULE.min;

    setErrorMessage(isNotValid ? ERROR_MESSAGE.CARD_PASSWORD_LENGTH : '');

    setCardPassword(value);
  };

  return {
    cardPassword,
    onChangeCardPassword,
    errorMessage,
    isCardPasswordValid: cardPassword !== '' && errorMessage === '',
  };
};

export default useCardPassword;
