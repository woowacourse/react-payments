import { useState } from 'react';

const ERROR_MESSAGE = {
  CARD_CVC_LENGTH: 'CVC는 3자리입니다.',
} as const;

const CVC = {
  MAX_LENGTH: 3,
  MIN_LENGTH: 0,
} as const;

function useCardCVC() {
  const [cardCVC, setCardCVC] = useState('');
  const [isCardCVCError, setIsCardCVCError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onChangeCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const originValue = e.target.value;
    const value = originValue.replace(/[^0-9]/g, '');

    if (value.length > CVC.MAX_LENGTH) {
      return;
    }

    const isNotValid =
      value.length < CVC.MAX_LENGTH ||
      value.length > CVC.MAX_LENGTH ||
      Number(value) < CVC.MIN_LENGTH;

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
