import { ERROR_MESSAGE } from '../constants/message';
import { isOnlyEnglishOrSpace } from '../domain/checkIsValid';
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
  const isValid =
    validateInput.inputValue.length > 0 && validateInput.errorMessage === '';

  return {
    onChange: validateInput.onChange,
    holder: validateInput.inputValue,
    errorMessage: validateInput.errorMessage,
    isValid,
    initValue: validateInput.initValue,
  };
}

export interface UseCardHolder {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  holder: string;
  errorMessage: string;
  isValid: boolean;
  initValue: () => void;
}
