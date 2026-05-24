import { isNumericString } from '@/core/utils/validator';
import { CVC_LENGTH, validateCvc } from '@/entities/card/model/cvc';

export const CVC_ERROR_MESSAGE = {
  EMPTY: 'CVC를 전부 채워주세요.',
};

export const isValidInputCvc = (value: string): boolean => {
  return value === '' || isNumericString(value);
};

export const getCvcFieldState = (value: string, touched: boolean) => {
  const errorMessage = !validateCvc(value) ? CVC_ERROR_MESSAGE.EMPTY : undefined;
  const visibleErrorMessage = touched ? errorMessage : undefined;

  return {
    errorMessage: visibleErrorMessage,
    maxLength: CVC_LENGTH,
  };
};
