import { useEffect, useState } from 'react';

export interface CardPasswordProps {
  setPasswordNumbers: React.Dispatch<React.SetStateAction<string>>;
  setPasswordError: React.Dispatch<React.SetStateAction<boolean>>;
}

const PASSWORD_NUMBERS_LENGTH = 2;
const ERROR_MESSAGE = '숫자 2자리를 입력해주세요.';

export const useCardPassword = ({
  setPasswordNumbers,
  setPasswordError,
}: CardPasswordProps) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const hasError = error;
    setPasswordError(hasError);
  }, [error, setPasswordError]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value) && value.length <= PASSWORD_NUMBERS_LENGTH) {
      setErrorMessage('');
      setError(false);
      setPasswordNumbers(value);
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
