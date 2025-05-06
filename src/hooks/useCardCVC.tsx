import { useState } from 'react';
import { PARSE_RULE, CVC_RULE, ERROR_MESSAGE } from '../constants/cardCVC';

const useCardCVC = ({ onComplete }: { onComplete: () => void }) => {
  const [cardCVC, setCardCVC] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangeCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    const newErrorMessage = isNotValid ? ERROR_MESSAGE.CARD_CVC_LENGTH : '';
    setErrorMessage(newErrorMessage);

    setCardCVC(value);

    const isCardCVCValid = value !== '' && newErrorMessage === '';
    if (!isCardCVCValid) {
      return;
    }

    onComplete();
  };

  return {
    cardCVC,
    handleChangeCVC,
    errorMessage,
    isCardCVCValid: cardCVC !== '' && errorMessage === '',
  };
};

export default useCardCVC;
