import {useState} from 'react';
import {createFlags, computeNextTouched, computeNextErrInfo} from './fieldErrorUtils';

const EXPIRY_ERR_MSG = '2자리를 입력해 주세요';
const INVALID_MONTH_ERR_MSG = '01~12 사이의 월을 입력해 주세요';
const EXPIRY_FIELD_COUNT = 2;
const MONTH_FIELD_INDEX = 0;
const YEAR_FIELD_INDEX = 1;

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
  const [errInfo, setErrInfo] = useState({
    errFlags: createFlags(EXPIRY_FIELD_COUNT),
    errMessages: Array(EXPIRY_FIELD_COUNT).fill('') as string[],
  });
  const [isTouched, setIsTouched] = useState<boolean[]>(createFlags(EXPIRY_FIELD_COUNT));

  const updateErrInfo = (index: number, hasErr: boolean, errMsg = EXPIRY_ERR_MSG) => {
    setErrInfo(computeNextErrInfo(errInfo.errFlags, errInfo.errMessages, index, hasErr, errMsg));
  };

  const clearErrWhenComplete = (index: number, value: string, fieldType: 'month' | 'year') => {
    if (!isTouched[index] || !isValidExpiry(value, fieldType)) return;
    updateErrInfo(index, false);
  };

  const handleMonthChange = (value: string) => {
    const inputValue = value.trim();
    if (!/^\d*$/.test(inputValue) || inputValue.length > 2) return;
    setExpiryMonth(inputValue);
    clearErrWhenComplete(MONTH_FIELD_INDEX, inputValue, 'month');
  };

  const handleYearChange = (value: string) => {
    const inputValue = value.trim();
    if (!/^\d*$/.test(inputValue) || inputValue.length > 2) return;
    setExpiryYear(inputValue);
    clearErrWhenComplete(YEAR_FIELD_INDEX, inputValue, 'year');
  };

  const handleBlur = (index: number, value: string, fieldType: 'month' | 'year') => {
    setIsTouched((prev) => computeNextTouched(prev, index));
    const zeroPaddedValue = fillZero(value, fieldType);
    const normalizedValue = zeroPaddedValue ?? value;

    if (fieldType === 'month') setExpiryMonth(normalizedValue);
    if (fieldType === 'year') setExpiryYear(normalizedValue);

    const hasErr = !isValidExpiry(normalizedValue, fieldType);
    const errMsg = fieldType === 'month' && normalizedValue.length === 2 ? INVALID_MONTH_ERR_MSG : EXPIRY_ERR_MSG;
    updateErrInfo(index, hasErr, errMsg);
  };

  const firstErrIdx = errInfo.errFlags.indexOf(true);
  const hasAnyErr = firstErrIdx !== -1;
  const errMsg = hasAnyErr ? errInfo.errMessages[firstErrIdx] : '';
  const isComplete = isValidExpiry(expiryMonth, 'month') && isValidExpiry(expiryYear, 'year');

  return {
    expiryMonth,
    expiryYear,
    isComplete,
    hasAnyErr,
    firstErrIdx,
    errMsg,
    handleMonthChange,
    handleYearChange,
    handleBlur,
  };
}
