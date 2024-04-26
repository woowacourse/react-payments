import { useState } from 'react';
import { InputInfo } from '../types/input';
import Validation from '../domain/InputValidation';
import { validateLength } from '../domain/CompleteValidation';

interface Props {
  info: InputInfo;
  handleInput: (value: string) => void;
  handleErrorMessage: (errorMessage: string) => void;
  onNext: () => void;
}

export const useInput = ({
  info,
  handleInput,
  handleErrorMessage,
  onNext,
}: Props) => {
  const [value, setValue] = useState<string>('');

  const handleValidation = (inputValue: string) => {
    try {
      Validation[info.validateType]?.(inputValue);
      handleInput(inputValue);
      handleErrorMessage('');

      if (inputValue.length === info.maxLength) {
        onNext();
      }
    } catch (error) {
      if (error instanceof Error) {
        handleErrorMessage(error.message);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    handleValidation(inputValue);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    try {
      validateLength(value, info.minLength);
    } catch (error) {
      if (error instanceof Error) {
        handleErrorMessage(error.message);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      try {
        validateLength(value, info.minLength);
        Validation[info.validateType]?.(value);
        // TOOD 고민해보자
        onNext();
      } catch (error) {
        if (error instanceof Error) {
          handleErrorMessage(error.message);
        }
      }
    }
  };

  return {
    handleChange,
    handleBlur,
    handleKeyDown,
  };
};
