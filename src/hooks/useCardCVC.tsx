import { useState } from 'react';

const PARSE_RULE = {
  length: 3,
} as const;

const CVC_RULE = {
  min: 0,
} as const;

const ERROR_MESSAGE = {
  CARD_CVC_LENGTH: 'CVC는 3자리입니다.',
} as const;

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
