import { isNumericString } from '@/core/utils/validator';
import { PASSWORD_LENGTH, validatePassword } from '@/entities/card/model/password';

export const PASSWORD_ERROR_MESSAGE = {
  EMPTY: 'PASSWORD를 전부 채워주세요.',
};

export const isValidInputPassword = (value: string): boolean => {
  return value === '' || isNumericString(value);
};

export const getPasswordFieldState = (value: string, touched: boolean) => {
  const errorMessage = !validatePassword(value) ? PASSWORD_ERROR_MESSAGE.EMPTY : undefined;
  const visibleErrorMessage = touched ? errorMessage : undefined;

  return {
    errorMessage: visibleErrorMessage,
    isValid: visibleErrorMessage === undefined,
    maxLength: PASSWORD_LENGTH,
  };
};
