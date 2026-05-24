import { isNumericString } from '@/core/utils/validator';
import {
  EXPIRY_MONTH_LENGTH,
  EXPIRY_YEAR_LENGTH,
  isValidMonth,
  validateExpiryMonth,
  validateExpiryYear,
  type ExpiryDate,
} from '@/entities/card/model/expiryDate';

const EXPIRY_DATE_ERROR_MESSAGE = {
  EMPTY: '유효기간을 전부 채워주세요.',
} as const;

export interface ExpiryTouched {
  month: boolean;
  year: boolean;
}

export const isValidMonthInput = (value: string): boolean => {
  if (value !== '' && !isNumericString(value)) return false;
  if (!isValidMonth(value)) return false;
  return value.length <= EXPIRY_MONTH_LENGTH;
};

export const isValidYearInput = (value: string): boolean => {
  if (value !== '' && !isNumericString(value)) return false;
  return value.length <= EXPIRY_YEAR_LENGTH;
};

export const getExpiryDateFieldState = ({
  expiryDate,
  touched,
}: {
  expiryDate: ExpiryDate;
  touched: ExpiryTouched;
}) => {
  const monthError = !validateExpiryMonth(expiryDate.month)
    ? EXPIRY_DATE_ERROR_MESSAGE.EMPTY
    : undefined;
  const yearError = !validateExpiryYear(expiryDate.year)
    ? EXPIRY_DATE_ERROR_MESSAGE.EMPTY
    : undefined;

  const visibleMonthError = touched.month ? monthError : undefined;
  const visibleYearError = touched.year ? yearError : undefined;

  return {
    visibleMonthError,
    visibleYearError,
    totalErrorMessage: visibleMonthError ?? visibleYearError,
  };
};
