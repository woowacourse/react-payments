import { ERROR_MESSAGE } from '../constants/message';
import { isOnlyEnglishOrSpace } from '../domain/checkIsValid';
import { useState } from 'react';
import useValidateInput from './useValidateInput';

const cardHolderValidateInputProps = {
  decorateValue: (string: string) => string.toUpperCase(),
  validatorPropsArray: [
    {
      checkIsValid: isOnlyEnglishOrSpace,
      errorMessage: ERROR_MESSAGE.notEnglishOrSpace,
    },
  ],
};

export default function useCardHolder() {
  const validateInput = useValidateInput(cardHolderValidateInputProps);
  const [isTouched, setIsTouched] = useState(false);
  const [lastEventTargetValue, setLastEventTargetValue] = useState('');

  const isValid =
    isTouched &&
    validateInput.inputValue.length > 0 &&
    lastEventTargetValue.length > 0;

  return {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsTouched(true);
      validateInput.onChange(event);
      setLastEventTargetValue(event.target.value);
    },
    holder: validateInput.inputValue,
    errorMessage: validateInput.errorMessage,
    isValid,
    isTouched,
    initValue: () => {
      validateInput.initValue();
      setIsTouched(false);
    },
  };
}

export interface UseCardHolder {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  holder: string;
  errorMessage: string;
  isValid: boolean;
  isTouched: boolean;
  initValue: () => void;
}
