import { useState } from 'react';
import { ENTER_KEY } from '../constants/system';

interface Props {
  handleInput: (value: string) => void;
  handleErrorMessage: (errorMessage: string) => void;
  validate: (value: string) => void;
  validateLength: (value: string) => void;
  onNext: () => void;
}

export const useInput = ({
  handleInput,
  handleErrorMessage,
  validate,
  validateLength,
  onNext,
}: Props) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    maxLength: number
  ) => {
    const inputValue = e.target.value;
    handleTryCatch(() => {
      validate(inputValue);
      setValue(inputValue);
      handleInput(inputValue);
      handleErrorMessage('');

      if (inputValue.length === maxLength) {
        onNext();
      }
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handleTryCatch(() => {
      validateLength(value);
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ENTER_KEY) {
      handleTryCatch(() => {
        validateLength(value);
        validate(value);
        onNext();
      });
    }
  };

  const handleTryCatch = (funcs: () => void) => {
    try {
      funcs();
    } catch (error) {
      if (error instanceof Error) {
        handleErrorMessage(error.message);
      }
    }
  };

  return {
    handleChange,
    handleBlur,
    handleKeyDown,
  };
};
