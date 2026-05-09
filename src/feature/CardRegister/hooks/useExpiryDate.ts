import {useState} from 'react';
import {createFlags, computeNextTouched, computeNextErrorInfo} from './fieldErrorUtils';

const EXPIRY_ERROR_MSG = '2자리를 입력해 주세요';
const INVALID_MONTH_ERROR_MSG = '01~12 사이의 월을 입력해 주세요';

const isValidMonth = (value: string) => {
  const month = Number(value);
  return month >= 1 && month <= 12;
};

const isValidExpiry = (value: string, fieldType: 'month' | 'year') => {
  if (fieldType === 'month') return value.length === 2 && isValidMonth(value);
  return value.length === 2;
};

const fillZero = (value: string, fieldType: 'month' | 'year') => {
  if (fieldType === 'month' && value.length === 1 && value !== '0') return `0${value}`;
  if (fieldType === 'year' && value.length === 1) return `0${value}`;
  return undefined;
};

export function useExpiryDate() {
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [errorInfo, setErrorInfo] = useState({
    errorFlags: createFlags(2),
    errorMessages: Array(2).fill('') as string[],
    currentErrorMsg: '',
  });
  const [isTouched, setIsTouched] = useState<boolean[]>(createFlags(2));

  const updateErrorInfo = (index: number, hasError: boolean, errorMsg = EXPIRY_ERROR_MSG) => {
    const nextErrorInfo = computeNextErrorInfo(errorInfo.errorFlags, errorInfo.errorMessages, index, hasError, errorMsg);
    setErrorInfo(nextErrorInfo);
  };

  const clearErrorWhenComplete = (index: number, value: string, fieldType: 'month' | 'year') => {
    if (!isTouched[index] || !isValidExpiry(value, fieldType)) return;
    updateErrorInfo(index, false);
  };

  const handleMonthChange = (value: string) => {
    const inputValue = value.trim();
    if (!/^\d*$/.test(inputValue) || inputValue.length > 2) return;
    setExpiryMonth(inputValue);
    clearErrorWhenComplete(0, inputValue, 'month');
  };

  const handleYearChange = (value: string) => {
    const inputValue = value.trim();
    if (!/^\d*$/.test(inputValue) || inputValue.length > 2) return;
    setExpiryYear(inputValue);
    clearErrorWhenComplete(1, inputValue, 'year');
  };

  const handleBlur = (index: number, value: string, fieldType: 'month' | 'year') => {
    setIsTouched((prev) => computeNextTouched(prev, index));
    const zeroPaddedValue = fillZero(value, fieldType);
    const normalizedValue = zeroPaddedValue ?? value;

    if (fieldType === 'month') setExpiryMonth(normalizedValue);
    if (fieldType === 'year') setExpiryYear(normalizedValue);

    const hasError = !isValidExpiry(normalizedValue, fieldType);
    const errorMsg = fieldType === 'month' && normalizedValue.length === 2 ? INVALID_MONTH_ERROR_MSG : EXPIRY_ERROR_MSG;
    updateErrorInfo(index, hasError, errorMsg);
  };

  const firstErrorIdx = errorInfo.errorFlags.indexOf(true);
  const isComplete = isValidExpiry(expiryMonth, 'month') && isValidExpiry(expiryYear, 'year');

  return {
    expiryMonth,
    expiryYear,
    isComplete,
    hasAnyError: firstErrorIdx !== -1,
    firstErrorIdx,
    errorMsg: errorInfo.currentErrorMsg,
    handleMonthChange,
    handleYearChange,
    handleBlur,
  };
}
