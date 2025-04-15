import { useState } from 'react';

type useCardCVCNumberOptions = {
  cardCVCNumber: number | '';
  setCardCVCNumber: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
  errorMessage: string;
};

const useCardCVCNumber = (): useCardCVCNumberOptions => {
  const [cardCVCNumber, setCardCVCNumber] = useState<number | ''>('');
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const isValidCardCVCNumberChange = (input: string) => {
    if (isNaN(Number(input))) {
      setErrorMessage('숫자만 입력 가능합니다');
      return false;
    }
    if (input.length > 3) {
      setErrorMessage('3자리를 입려해야 합니다');
      return false;
    }

    return true;
  };

  const handleCardCVCNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isValid = isValidCardCVCNumberChange(event.target.value);
    if (isValid) {
      setIsError(false);
      setErrorMessage('');
      setCardCVCNumber(Number(event.target.value));
      return;
    }

    setIsError(true);
  };

  return {
    cardCVCNumber: cardCVCNumber,
    setCardCVCNumber: handleCardCVCNumberChange,
    isError: isError,
    errorMessage: errorMessage,
  };
};

export default useCardCVCNumber;
