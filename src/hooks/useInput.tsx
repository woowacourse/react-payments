import { useState } from 'react';
import { InputInfo } from '../types/input';
import { InputValidation, validateLength } from '../domain/InputValidation';
import { ENTER_KEY } from '../constants/system';

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
      InputValidation[info.validateType]?.(inputValue);
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
    if (e.key === ENTER_KEY) {
      try {
        validateLength(value, info.minLength);
        InputValidation[info.validateType]?.(value);
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
