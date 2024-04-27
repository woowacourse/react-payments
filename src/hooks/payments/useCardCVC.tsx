import { isOnlyDigit, isSameLength } from '../../domain/checkIsValid';

import { BOUND } from '../../constants/number';
import { ERROR_MESSAGE } from '../../constants/message';
import { useState } from 'react';
import useValidateInput from '../useValidateInput';

const validateInputProps = {
  validatorPropsArray: [
    {
      checkIsValid: isOnlyDigit,
      errorMessage: ERROR_MESSAGE.notDigit,
    },
    {
      checkIsValid: (string: string) =>
        isSameLength(string, BOUND.cardCVCUpper),
      errorMessage: `${BOUND.cardCVCUpper}${ERROR_MESSAGE.invalidLengthTail}`,
    },
  ],
};

export default function useCardCVC() {
  const [isTouched, setIsTouched] = useState(false);
  const validateInput = useValidateInput(validateInputProps);

  const isValid = isTouched && validateInput.errorMessage === '';

  return {
    cardCVC: validateInput.inputValue,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsTouched(true);
      validateInput.onChange(event);
    },
    errorMessage: validateInput.errorMessage,
    isValid,
    isTouched,
    initValue: () => {
      validateInput.initValue();
      setIsTouched(false);
    },
  };
}

export interface UseCardCVC {
  cardCVC: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
  isValid: boolean;
  isTouched: boolean;
  initValue: () => void;
}
