import { useState } from 'react';

const ERROR_MESSAGE = {
  CARD_CVC_LENGTH: 'CVC는 3자리입니다.',
};

function useCardCVC() {
  const [cardCVC, setCardCVC] = useState('');
  const [isCardCVCError, setIsCardCVCError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onChangeCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value.length > 3) {
      return;
    }

    const isNotValid =
      value.length < 3 || value.length > 3 || Number(value) < 0;

    setErrorMessage(isNotValid ? ERROR_MESSAGE.CARD_CVC_LENGTH : '');

    setIsCardCVCError(isNotValid);

    setCardCVC(value);
  };

  const checkCardCVCError = () => {
    return isCardCVCError;
  };

  return {
    cardCVC,
    isCardCVCError,
    onChangeCVC,
    checkCardCVCError,
    errorMessage,
  };
}

export default useCardCVC;
