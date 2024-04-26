import { isOnlyDigit, isSameLength } from '../domain/checkIsValid';

import { BOUND } from '../constants/number';
import { ERROR_MESSAGE } from '../constants/message';
import useValidateInput from './useValidateInput';

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

  const isValid =
    validateInput.inputValue.length === BOUND.cardPasswordHeadUpper &&
    validateInput.errorMessage === '';

  return {
    cardCVC: validateInput.inputValue,
    onChange: validateInput.onChange,
    errorMessage: validateInput.errorMessage,
    isValid,
    initValue: validateInput.initValue,
  };
}

export interface UseCardPasswordHead {
  cardCVC: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
  isValid: boolean;
  initValue: () => void;
}
