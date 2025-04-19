import { useState } from 'react';
import useError from './useError';
import isNumber from './validate/isNumber';
import isValidStringLength from './validate/isValidStringLength';
import { COMMON_ERROR_MESSAGE } from './commonErrorMessage';

type useCardCVCNumberOptions = {
  cardCVCNumber: string;
  setCardCVCNumber: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isError: IsError;
  errorMessage: string;
};

type IsError = {
  cvcNumber: boolean;
};

const INITIAL_IS_ERROR: IsError = {
  cvcNumber: false,
};

const MAX_CVC_LENGTH = 3;

const useCardCVCNumber = (): useCardCVCNumberOptions => {
  const [cardCVCNumber, setCardCVCNumber] = useState<string>('');
  const { error, setErrorField, clearError } = useError(INITIAL_IS_ERROR);

  const getCardCVCNumberChangeValidationResult = (input: string) => {
    if (!isNumber(input)) {
      return { isError: true, errorMessage: COMMON_ERROR_MESSAGE.ONLY_NUMBER };
    }
    if (!isValidStringLength({ value: input, maxLength: MAX_CVC_LENGTH })) {
      return {
        isError: true,
        errorMessage:
          COMMON_ERROR_MESSAGE.ONLY_NUMBER_WITH_LENGTH(MAX_CVC_LENGTH),
      };
    }

    return { isError: false, errorMessage: '' };
  };

  const handleCardCVCNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { isError, errorMessage } = getCardCVCNumberChangeValidationResult(
      event.target.value.trim()
    );
    if (isError) {
      setErrorField('cvcNumber', errorMessage);
      return;
    }
    clearError('cvcNumber');
    setCardCVCNumber(event.target.value.trim());
  };

  return {
    cardCVCNumber: cardCVCNumber,
    setCardCVCNumber: handleCardCVCNumberChange,
    isError: error.isError,
    errorMessage: error.errorMessage,
  };
};

export default useCardCVCNumber;
