import { useState } from 'react';

const ERROR_MESSAGE = {
  CARD_NUMBER_LENGTH: '카드 번호는 16자리입니다.',
};

const CARD_NUMBER = {
  MAX_LENGTH: 4,
  MIN_LENGTH: 0,
};

function useCardNumber() {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [isError, setIsError] = useState([false, false, false, false]);
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, n: number) => {
    const { value } = e.target;

    if (value.length > CARD_NUMBER.MAX_LENGTH) {
      return;
    }

    const checkValidCardNumber = (value: string) => {
      if (value === '') return false;
      return (
        value.length < CARD_NUMBER.MAX_LENGTH ||
        Number(value) < CARD_NUMBER.MIN_LENGTH
      );
    };

    const copy = [...isError];

    for (let i = 0; i < cardNumber.length; i++) {
      if (i === n) {
        const isNotValid = checkValidCardNumber(value);
        copy[i] = isNotValid ? true : false;
      } else {
        const isNotValid = checkValidCardNumber(cardNumber[i]);
        copy[i] = isNotValid ? true : false;
      }
    }
    setIsError(copy);

    setErrorMessage(
      copy.some((v) => v === true) ? ERROR_MESSAGE.CARD_NUMBER_LENGTH : '',
    );

    setCardNumber((prev) => {
      const newCardNumber = [...prev];
      newCardNumber[n] = value;
      return newCardNumber;
    });
  };

  return {
    cardNumber,
    onChange,
    isError,
    errorMessage,
  };
}

export default useCardNumber;
