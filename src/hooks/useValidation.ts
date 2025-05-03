import { isValidLength, isValidNumber, isValidMonthRange, isValidYearRange } from '../util/validation';
import { NO_ERROR } from '../constants/constant';

export type ValidationType = 'cardNumber' | 'expirationMonth' | 'expirationYear' | 'CVC' | 'password';

export interface ValidationProps {
  getErrorMessage: (field: ValidationType, value: string) => string;
  isInvalid: (field: ValidationType, value: string) => boolean;
}

export const useValidation = () => {
  const getErrorMessage = (type: ValidationType, value: string): string => {
    if (value === '') return NO_ERROR;

    switch (type) {
      case 'cardNumber':
        if (!isValidLength(value, 4)) return '4자리만 입력 가능합니다.';
        if (!isValidNumber(value)) return '숫자만 입력 가능합니다.';
        break;

      case 'expirationMonth':
        if (!isValidLength(value, 2)) return '2자리만 입력 가능합니다.';
        if (!isValidNumber(value)) return '숫자만 입력 가능합니다.';
        if (!isValidMonthRange(value)) return '유효기간은 1~12월 사이여야 합니다.';
        break;

      case 'expirationYear':
        if (!isValidLength(value, 2)) return '2자리만 입력 가능합니다.';
        if (!isValidNumber(value)) return '숫자만 입력 가능합니다.';
        if (!isValidYearRange(value)) return '유효기간은 25~99년 사이여야 합니다.';
        break;

      case 'CVC':
        if (!isValidLength(value, 3)) return '3자리만 입력 가능합니다.';
        if (!isValidNumber(value)) return '숫자만 입력 가능합니다.';
        break;

      case 'password':
        if (!isValidLength(value, 2)) return '2자리만 입력 가능합니다.';
        if (!isValidNumber(value)) return '숫자만 입력 가능합니다.';
        break;

      default:
        break;
    }
    return NO_ERROR;
  };

  const isInvalid = (type: ValidationType, value: string): boolean => {
    return getErrorMessage(type, value) !== NO_ERROR;
  };

  return { getErrorMessage, isInvalid };
};
