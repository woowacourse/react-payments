import {useState} from 'react';
import {createFlags, computeNextTouched, computeNextErrorInfo} from './fieldErrorUtils';

const ERROR_MSG = '2자리를 입력해 주세요';
const INVALID_MONTH_MSG = '01~12 사이의 월을 입력해 주세요';

const isValidMonth = (value: string) => {
  const month = Number(value);
  return month >= 1 && month <= 12;
};

const isValidExpiry = (value: string, type: 'month' | 'year') => {
  if (type === 'month') return value.length === 2 && isValidMonth(value);
  return value.length === 2;
};

const fillZero = (value: string, type: 'month' | 'year') => {
  if (type === 'month' && value.length === 1 && value !== '0') return `0${value}`;
  if (type === 'year' && value.length === 1) return `0${value}`;
  return undefined;
};

export function useExpiryDate() {
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [errorInfo, setErrorInfo] = useState({
    flag: createFlags(2),
    messages: Array(2).fill('') as string[],
    currentErrorMsg: '',
  });
  const [isTouched, setIsTouched] = useState<boolean[]>(createFlags(2));

  const updateErrorInfo = (index: number, hasError: boolean, errorMsg = ERROR_MSG) => {
    const next = computeNextErrorInfo(errorInfo.flag, errorInfo.messages, index, hasError, errorMsg);
    setErrorInfo(next);
  };

  const clearErrorWhenComplete = (index: number, value: string, type: 'month' | 'year') => {
    if (!isTouched[index] || !isValidExpiry(value, type)) return;
    updateErrorInfo(index, false);
  };

  const handleMonthChange = (value: string) => {
    const trimmed = value.trim();
    if (!/^\d*$/.test(trimmed) || trimmed.length > 2) return;
    setExpiryMonth(trimmed);
    clearErrorWhenComplete(0, trimmed, 'month');
  };

  const handleYearChange = (value: string) => {
    const trimmed = value.trim();
    if (!/^\d*$/.test(trimmed) || trimmed.length > 2) return;
    setExpiryYear(trimmed);
    clearErrorWhenComplete(1, trimmed, 'year');
  };

  const handleBlur = (index: number, value: string, type: 'month' | 'year') => {
    setIsTouched((prev) => computeNextTouched(prev, index));
    const filled = fillZero(value, type);
    const finalValue = filled ?? value;

    if (type === 'month') setExpiryMonth(finalValue);
    if (type === 'year') setExpiryYear(finalValue);

    const hasError = !isValidExpiry(finalValue, type);
    const msg = type === 'month' && finalValue.length === 2 ? INVALID_MONTH_MSG : ERROR_MSG;
    updateErrorInfo(index, hasError, msg);
  };

  const firstErrorIdx = errorInfo.flag.indexOf(true);
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
