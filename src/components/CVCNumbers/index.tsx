import React, { useEffect, useState } from 'react';
import CVCNumbersView from './CVCNumbersView';

export interface CVCNumbersProps {
  cvcNumbers: string;
  setCvcNumbers: React.Dispatch<React.SetStateAction<string>>;
  onComplete?: () => void;
  setCvcError: React.Dispatch<React.SetStateAction<boolean>>;
}

const CVC_NUMBERS_LENGTH = 3;
const ERROR_MESSAGE = '숫자만 입력 가능합니다.';

const CVCNumbers = ({
  cvcNumbers,
  setCvcNumbers,
  onComplete,
  setCvcError,
}: CVCNumbersProps) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const hasError = error;
    setCvcError(hasError);
  }, [error]);

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

  return (
    <CVCNumbersView
      cvcNumbers={cvcNumbers}
      errorMessage={errorMessage}
      error={error}
      handleInputChange={handleInputChange}
      onComplete={onComplete}
    />
  );
};

export default CVCNumbers;
