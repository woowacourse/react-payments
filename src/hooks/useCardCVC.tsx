import { useState } from 'react';
import { PARSE_RULE, CVC_RULE, ERROR_MESSAGE } from '../constants/cardCVC';

function useCardCVC() {
  const [cardCVC, setCardCVC] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onChangeCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      Number(value) < CVC_RULE.min;

    setErrorMessage(isNotValid ? ERROR_MESSAGE.CARD_CVC_LENGTH : '');

    setCardCVC(value);
  };

  return {
    cardCVC,
    onChangeCVC,
    errorMessage,
  };
}

export default useCardCVC;
