import { ERROR_MESSAGE } from '../../constants/message';
import { isOnlyEnglishOrSpace } from '../../domain/checkIsValid';
import { useState } from 'react';
import useValidateInput from '../useValidateInput';

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
  const [wasChanged, setWasChanged] = useState(false);

  const isValid = wasChanged && validateInput.errorMessage === '';

  return {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      setWasChanged(true);
      validateInput.onChange(event);
    },
    holder: validateInput.inputValue,
    errorMessage: validateInput.errorMessage,
    isValid,
    wasChanged,
    initValue: () => {
      validateInput.initValue();
      setWasChanged(false);
    },
  };
}

export interface UseCardHolder {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  holder: string;
  errorMessage: string;
  isValid: boolean;
  wasChanged: boolean;
  initValue: () => void;
}
