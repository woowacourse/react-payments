import { useState } from 'react';
import CVCNumberInputView from './CVCNumberInputView';

export interface CVCNumberInputProps {
  cvcNumbers: string[];
  setCvcNumbers: React.Dispatch<React.SetStateAction<string[]>>;
}

const CVC_NUMBERS_LENGTH = 3;

const CVCNumberInput = ({ cvcNumbers, setCvcNumbers }: CVCNumberInputProps) => {
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvcNumbers((prev) => {
      const newState = [...prev];
      const value = e.target.value;
      if (/^[0-9]*$/.test(value) && value.length <= CVC_NUMBERS_LENGTH) {
        newState[0] = value;
        setIsError(false);
      } else {
        setIsError(true);
      }
      return newState;
    });
  };

  return (
    <CVCNumberInputView
      cvcNumbers={cvcNumbers}
      isError={isError}
      handleInputChange={handleInputChange}
    />
  );
};

export default CVCNumberInput;
