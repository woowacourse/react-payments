import { useState } from 'react';
import useError from './useError';

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

const useCardCVCNumber = (): useCardCVCNumberOptions => {
  const [cardCVCNumber, setCardCVCNumber] = useState<string>('');
  const { error, setErrorField, clearError } = useError(INITIAL_IS_ERROR);

  const isValidCardCVCNumberChange = (input: string) => {
    if (isNaN(Number(input))) {
      return { isError: true, errorMessage: '숫자만 입력 가능합니다' };
    }
    if (input.length > 3) {
      return { isError: true, errorMessage: '3자리를 입려해야 합니다' };
    }

    return { isError: false, errorMessage: '' };
  };

  const handleCardCVCNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { isError, errorMessage } = isValidCardCVCNumberChange(
      event.target.value.trim()
    );
    if (isError) {
      setErrorField('cvcNumber', errorMessage);
      return;
    }
    clearError('cvcNumber');
    setCardCVCNumber(event.target.value.trim());
  };

  console.log('error!', error);
  return {
    cardCVCNumber: cardCVCNumber,
    setCardCVCNumber: handleCardCVCNumberChange,
    isError: error.isError,
    errorMessage: error.errorMessage,
  };
};

export default useCardCVCNumber;
