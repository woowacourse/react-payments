import React from 'react';
import { useState } from 'react';
import { validateCardPassword } from '../domain/validate';
import { CARD_VALIDATION_INFO } from '../constants/cardValidationInfo';

export const usePassword = (): {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  updatePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
  errorMessage: string;
  isComplete: boolean;
  setIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
} => {
  const [password, setPassword] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
    validate(value);

    const isValid = value.length === 2;
    setIsComplete(isValid);
  };

  const validate = (value: string) => {
    try {
      setIsError(false);
      if (value.length === 0) {
        setErrorMessage('');
        return;
      }
      validateCardPassword(value, CARD_VALIDATION_INFO.PASSWORD_MAX_LENGTH);
      setErrorMessage('');
    } catch (error) {
      if (error instanceof Error) {
        setIsError(true);
        setErrorMessage(error.message);
      }
    }
  };

  return {
    password,
    setPassword,
    updatePassword,
    isError,
    errorMessage,
    isComplete,
    setIsComplete,
  };
};
