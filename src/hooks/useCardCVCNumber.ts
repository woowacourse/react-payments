import { useState } from 'react';

type useCardCVCNumberOptions = {
  cardCVCNumber: string;
  setCardCVCNumber: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
  errorMessage: string;
};

const useCardCVCNumber = (): useCardCVCNumberOptions => {
  const [cardCVCNumber, setCardCVCNumber] = useState<string>('');
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
    const isValid = isValidCardCVCNumberChange(event.target.value.trim());
    if (isValid) {
      setIsError(false);
      setErrorMessage('');
      setCardCVCNumber(event.target.value.trim());
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
