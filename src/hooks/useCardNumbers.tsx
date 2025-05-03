import { useState } from 'react';
import { CARD_NUMBER_RULE } from '../constants/cardValidationRule';
import { CARD_NUMBER_ERROR } from '../constants/errorMessage';

type ValitationResult = {
  numbers: string[];
  error: errorType[];
  validate: (value: string, index: number) => void;
};

type errorType = {
  isValidate: boolean;
  errorMessage: string;
};

const initialDate = {
  isValidate: false,
  errorMessage: '',
};

export function useCardNumbers(): ValitationResult {
  const [numbers, setNumbers] = useState(['', '', '', '']);
  const [error, setError] = useState<errorType[]>(
    Array.from({ length: CARD_NUMBER_RULE.MAX_LENGTH }, () => initialDate)
  );

  const updateCardNumber = (
    index: number,
    isError: boolean,
    message: string
  ) => {
    setError((prev) => {
      prev[index] = {
        isValidate: isError,
        errorMessage: message,
      };
      return prev;
    });
  };

  const validate = (value: string, index: number) => {
    if (value.length > CARD_NUMBER_RULE.MAX_LENGTH) return;

    setNumbers((prev) => {
      const newNumbers = [...prev];
      newNumbers[index] = value;
      return newNumbers;
    });

    if (value === '') {
      updateCardNumber(index, false, '');
      return;
    }

    if (
      Number(value[0]) !== CARD_NUMBER_RULE.VISA_START_NUMBER &&
      index === 0 &&
      (Number(value.slice(0, 2)) < CARD_NUMBER_RULE.MASTER_MIN_NUMBER ||
        Number(value.slice(0, 2)) > CARD_NUMBER_RULE.MASTER_MAX_NUMBER)
    ) {
      updateCardNumber(index, true, CARD_NUMBER_ERROR.INVALID_CARD_NUMBER);
      return;
    }
    if (!/^\d*$/.test(value)) {
      updateCardNumber(index, true, CARD_NUMBER_ERROR.NOT_A_NUMBER);
      return;
    }
    if (value.length < CARD_NUMBER_RULE.MAX_LENGTH) {
      updateCardNumber(index, true, CARD_NUMBER_ERROR.INVALID_LENGTH);
      return;
    }
    updateCardNumber(index, false, '');
  };

  return { numbers, error, validate };
}
