import { useState } from 'react';
import useError from './useError';
import isNumber from './validate/isNumber';
import isInteger from './validate/isInteger';
import { COMMON_ERROR_MESSAGE } from './message/commonErrorMessage';
import isValidStringLength from './validate/isValidStringLength';
// export type useCardCVCNumberOptions = {
//   cardCVCNumber: string;
//   setCardCVCNumber: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   handleCardCVCBlur: () => void;
//   isError: IsError;
//   errorMessage: string;
//   resetCardCVCNumber: () => void;
// };

export type CardPasswordOptions = {
  cardPassword: string;
  setCardPassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardPasswordBlur: () => void;
  isError: IsError;
  errorMessage: string;
  resetCardPassword: () => void;
};

export type CardPasswordInputSectionProps = {
  cardPassword: string;
  setCardPassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardPasswordBlur: () => void;
  isError: IsError;
  errorMessage: string;
};

type IsError = {
  password: boolean;
};

const INITIAL_IS_ERROR: IsError = {
  password: false,
};

const MAX_PASSWORD_LENGTH = 2;

const useCardPassword = (): CardPasswordOptions => {
  const [cardPassword, setCardPassword] = useState<string>('');
  const { error, setErrorField, clearError } = useError(INITIAL_IS_ERROR);

  const getCardPasswordChangeValidationResult = (input: string) => {
    if (!isNumber(input) || !isInteger(input)) {
      return { isError: true, errorMessage: COMMON_ERROR_MESSAGE.ONLY_NUMBER };
    }

    if (
      !isValidStringLength({ value: input, maxLength: MAX_PASSWORD_LENGTH })
    ) {
      return {
        isError: true,
        errorMessage:
          COMMON_ERROR_MESSAGE.ONLY_NUMBER_WITH_LENGTH(MAX_PASSWORD_LENGTH),
      };
    }

    return { isError: false, errorMessage: '' };
  };

  const handleCardPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { isError, errorMessage } = getCardPasswordChangeValidationResult(
      event.target.value.trim()
    );
    if (isError) {
      setErrorField('password', errorMessage);
      return;
    }
    clearError('password');
    setCardPassword(event.target.value.trim());
  };

  const handleCardPasswordBlur = () => {
    clearError('password');
  };

  const resetCardPassword = () => {
    setCardPassword('');
  };

  return {
    cardPassword: cardPassword,
    setCardPassword: handleCardPasswordChange,
    handleCardPasswordBlur,
    isError: error.isError,
    errorMessage: error.errorMessage,
    resetCardPassword,
  };
};

export default useCardPassword;
