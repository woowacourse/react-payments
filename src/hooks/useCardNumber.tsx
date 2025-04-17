import { useState } from 'react';

const ERROR_MESSAGE = {
  CARD_NUMBER_LENGTH: '카드 번호는 16자리입니다.',
};

function useCardNumber() {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [isError, setIsError] = useState([false, false, false, false]);
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, n: number) => {
    const { value } = e.target;

    if (value.length > 4) {
      return;
    }

    const checkValidCardNumber = (value: string) => {
      return value.length < 4 || Number(value) < 0;
    };

    const isNotValid = checkValidCardNumber(value);

    setErrorMessage(isNotValid ? ERROR_MESSAGE.CARD_NUMBER_LENGTH : '');

    setIsError((prev) => {
      const newError = [...prev];
      newError[n] = isNotValid;
      return newError;
    });

    setCardNumber((prev) => {
      const newCardNumber = [...prev];
      newCardNumber[n] = value;
      return newCardNumber;
    });
  };

  const checkCardNumberError = () => {
    return isError.some((v) => v === true);
  };

  return {
    cardNumber,
    onChange,
    checkCardNumberError,
    isError,
    errorMessage,
  };
}

export default useCardNumber;
