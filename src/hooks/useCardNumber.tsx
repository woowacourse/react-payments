import { useState } from 'react';

const ERROR_MESSAGE = {
  CARD_NUMBER_LENGTH: '카드 번호는 16자리입니다.',
};

function useCardNumber() {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [errorMessage, setErrorMessage] = useState(['', '', '', '']);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, n: number) => {
    const { value } = e.target;

    if (value.length > 4) {
      return;
    }

    const checkValidCardNumber = (value: string) => {
      return value.length < 4 || Number(value) < 0;
    };

    setErrorMessage((prev) => {
      const newError = [...prev];
      const isNotValid = checkValidCardNumber(value);
      newError[n] = isNotValid ? ERROR_MESSAGE.CARD_NUMBER_LENGTH : '';
      return newError;
    });

    setCardNumber((prev) => {
      const newCardNumber = [...prev];
      newCardNumber[n] = value;
      return newCardNumber;
    });
  };

  return {
    cardNumber,
    onChange,
    errorMessage,
  };
}

export default useCardNumber;
