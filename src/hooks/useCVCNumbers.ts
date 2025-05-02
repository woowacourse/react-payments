import { useState, useEffect } from 'react';

const CVC_NUMBERS_LENGTH = 3;
const ERROR_MESSAGE = '숫자만 입력 가능합니다.';

interface UseCVCNumbersProps {
  cvcNumbers: string;
  setCvcNumbers: React.Dispatch<React.SetStateAction<string>>;
  setCvcError: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useCVCNumbers = ({
  cvcNumbers,
  setCvcNumbers,
  setCvcError,
}: UseCVCNumbersProps) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const hasError = error || cvcNumbers.length !== CVC_NUMBERS_LENGTH;
    setCvcError(hasError);
  }, [error, cvcNumbers, setCvcError]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value) && value.length <= CVC_NUMBERS_LENGTH) {
      setErrorMessage('');
      setError(false);
      setCvcNumbers(value);
    } else {
      setErrorMessage(ERROR_MESSAGE);
      setError(true);
    }
  };

  return {
    errorMessage,
    error,
    handleInputChange,
  };
};
