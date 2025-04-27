import { useState } from 'react';
import { validateCVC } from '../domain/validate';
import { CARD_VALIDATION_INFO } from '../constants/cardValidationInfo';

export const useCVC = (): {
  CVC: string;
  setCVC: React.Dispatch<React.SetStateAction<string>>;
  updateCVC: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isErrors: boolean;
  errorMessage: string;
  isComplete: boolean;
  setIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
  isDisplay: boolean;
  setIsDisplay: React.Dispatch<React.SetStateAction<boolean>>;
} => {
  const [CVC, setCVC] = useState<string>('');
  const [isErrors, setIsErrors] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  const updateCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCVC(value);
    validate(e.target.value);

    const isValid = value.length === CARD_VALIDATION_INFO.CVC_MAX_LENGTH;
    setIsComplete(isValid);
    if (isValid) setIsDisplay(true);
  };

  const validate = (value: string) => {
    try {
      setIsErrors(false);
      if (value.length === 0) {
        setErrorMessage('');
        return;
      }
      validateCVC(value, CARD_VALIDATION_INFO.CVC_MAX_LENGTH);
      setErrorMessage('');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setIsErrors(true);
        setErrorMessage(error.message);
      }
    }
  };

  return {
    CVC,
    setCVC,
    updateCVC,
    isErrors,
    errorMessage,
    isComplete,
    setIsComplete,
    isDisplay,
    setIsDisplay,
  };
};
