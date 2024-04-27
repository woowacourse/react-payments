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
        isSameLength(string, BOUND.cardPasswordHeadUpper),
      errorMessage: `${BOUND.cardPasswordHeadUpper}${ERROR_MESSAGE.invalidLengthTail}`,
    },
  ],
};

export default function useCardPasswordHead() {
  const validateInput = useValidateInput(validateInputProps);

  const [isTouched, setIsTouched] = useState(false);

  const isValid =
    validateInput.inputValue.length === BOUND.cardPasswordHeadUpper &&
    validateInput.errorMessage === '';

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
      setIsTouched(false);
      validateInput.initValue();
    },
  };
}

export interface UseCardPasswordHead {
  cardCVC: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
  isValid: boolean;
  isTouched: boolean;
  initValue: () => void;
}
