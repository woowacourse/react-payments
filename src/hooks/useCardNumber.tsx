import { useRef, useState } from 'react';
import {
  PARSE_RULE,
  CARD_NUMBER_RULE,
  ERROR_MESSAGE,
} from '../constants/cardNumber';

function useCardNumber() {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [errorMessage, setErrorMessage] = useState(['', '', '', '']);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const setInputRef = (el: HTMLInputElement | null, index: number) => {
    if (el) {
      inputRefs.current[index] = el;
    }
  };

  const focusNextInput = (index: number) => {
    if (index < cardNumber.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, n: number) => {
    const { value } = e.target;

    const isNumeric = value === '' || /^[0-9]+$/.test(value);
    if (!isNumeric) {
      return;
    }

    if (value.length > PARSE_RULE.length) {
      return;
    }

    const checkValidCardNumber = (value: string) => {
      return (
        value.length < PARSE_RULE.length || Number(value) < CARD_NUMBER_RULE.min
      );
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

    if (checkValidCardNumber(value)) {
      focusNextInput(n);
    }
  };

  return {
    cardNumber,
    onChange,
    errorMessage,
    setInputRef,
  };
}

export default useCardNumber;
