import React, { useState } from 'react';
import CVCNumbersView from './CVCNumbersView';

export interface CVCNumbersProps {
  cvcNumbers: string[];
  setCvcNumbers: React.Dispatch<React.SetStateAction<string[]>>;
}

const CVC_NUMBERS_LENGTH = 3;
const ERROR_MESSAGE = '숫자만 입력 가능합니다.';

const CVCNumbers: React.FC<CVCNumbersProps> = ({
  cvcNumbers,
  setCvcNumbers,
}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvcNumbers((prev) => {
      const newState = [...prev];
      const value = e.target.value;
      if (/^[0-9]*$/.test(value) && value.length <= CVC_NUMBERS_LENGTH) {
        newState[0] = value;
        setErrorMessage('');
        setError(false);
      } else {
        setErrorMessage(ERROR_MESSAGE);
        setError(true);
      }
      return newState;
    });
  };

  return (
    <CVCNumbersView
      cvcNumbers={cvcNumbers}
      errorMessage={errorMessage}
      error={error}
      handleInputChange={handleInputChange}
    />
  );
};

export default CVCNumbers;
