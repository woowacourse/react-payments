import { useEffect, useState } from 'react';
import { CARD_NUMBER_RULE } from '../constants/cardValidationRule';
import { CARD_NUMBER_ERROR } from '../constants/errorMessage';

type ValitationResult = {
  numbers: string[];
  error: errorType[];
  updateCardNumbers: (value: string, index: number) => void;
  isComplete: boolean;
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
  const [isComplete, setIsComplete] = useState(false);

  const updateError = (index: number, isError: boolean, message: string) => {
    setError((prev) => {
      prev[index] = {
        isValidate: isError,
        errorMessage: message,
      };
      return prev;
    });
  };

  const updateCardNumbers = (value: string, index: number) => {
    if (value.length > CARD_NUMBER_RULE.MAX_LENGTH) return;

    const newNumbers = [...numbers];
    newNumbers[index] = value;
    setNumbers(newNumbers);

    validate(value, index);
  };

  useEffect(() => {
    numbers.every(
      (numbers) => numbers.length === CARD_NUMBER_RULE.MAX_LENGTH
    ) && setIsComplete(true);
  }, [numbers]);

  const validate = (value: string, index: number) => {
    if (value === '') {
      updateError(index, false, '');
      return;
    }

    if (
      Number(value[0]) !== CARD_NUMBER_RULE.VISA_START_NUMBER &&
      index === 0 &&
      (Number(value.slice(0, 2)) < CARD_NUMBER_RULE.MASTER_MIN_NUMBER ||
        Number(value.slice(0, 2)) > CARD_NUMBER_RULE.MASTER_MAX_NUMBER)
    ) {
      updateError(index, true, CARD_NUMBER_ERROR.INVALID_CARD_NUMBER);
      return;
    }
    if (!/^\d*$/.test(value)) {
      updateError(index, true, CARD_NUMBER_ERROR.NOT_A_NUMBER);
      return;
    }
    if (value.length < CARD_NUMBER_RULE.MAX_LENGTH) {
      updateError(index, true, CARD_NUMBER_ERROR.INVALID_LENGTH);
      return;
    }
    updateError(index, false, '');
  };

  return { numbers, error, updateCardNumbers, isComplete };
}
