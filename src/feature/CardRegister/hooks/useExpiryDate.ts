import {useState} from 'react';
import {createFlags, createErrInfo, computeNextTouched, computeNextErrInfo} from '../utils/fieldErrorUtils';

const EXPIRY_ERR_MSG = '2자리를 입력해 주세요';
const INVALID_MONTH_ERR_MSG = '01~12 사이의 월을 입력해 주세요';

const EXPIRY_FIELD_COUNT = 2;
const EXPIRY_DIGIT_COUNT = 2;

const MONTH_FIELD_INDEX = 0;
const YEAR_FIELD_INDEX = 1;

const isValidMonth = (value: string) => {
  const month = Number(value);
  return month >= 1 && month <= 12;
};

const isValidExpiry = (value: string, index: number) => {
  if (index === MONTH_FIELD_INDEX) return value.length === EXPIRY_DIGIT_COUNT && isValidMonth(value);
  return value.length === EXPIRY_DIGIT_COUNT;
};

const fillZero = (value: string, index: number) => {
  if (value.length !== 1) return undefined;
  if (index === MONTH_FIELD_INDEX && value !== '0') return `0${value}`;
  if (index === YEAR_FIELD_INDEX) return `0${value}`;
  return undefined;
};

export function useExpiryDate() {
  const [expiryDate, setExpiryDate] = useState<string[]>(['', '']);
  const [errInfo, setErrInfo] = useState(createErrInfo(EXPIRY_FIELD_COUNT));
  const [isTouched, setIsTouched] = useState<boolean[]>(createFlags(EXPIRY_FIELD_COUNT));

  const updateErrInfo = (index: number, hasErr: boolean, errMsg = EXPIRY_ERR_MSG) => {
    setErrInfo(computeNextErrInfo(errInfo.errFlags, errInfo.errMessages, index, hasErr, errMsg));
  };

  const clearErrWhenComplete = (index: number, value: string) => {
    if (!isTouched[index] || !isValidExpiry(value, index)) return;
    updateErrInfo(index, false);
  };

  const handleChange = (index: number, rawValue: string) => {
    const inputValue = rawValue.trim();
    if (!/^\d*$/.test(inputValue) || inputValue.length > EXPIRY_DIGIT_COUNT) return;
    setExpiryDate((prev) => prev.map((v, i) => (i === index ? inputValue : v)));
    clearErrWhenComplete(index, inputValue);
  };

  const handleBlur = (index: number, rawValue: string) => {
    setIsTouched((prev) => computeNextTouched(prev, index));
    const zeroPaddedValue = fillZero(rawValue, index);
    const normalizedValue = zeroPaddedValue ?? rawValue;

    setExpiryDate((prev) => prev.map((v, i) => (i === index ? normalizedValue : v)));

    const hasErr = !isValidExpiry(normalizedValue, index);
    const errMsg =
      index === MONTH_FIELD_INDEX && normalizedValue.length === EXPIRY_DIGIT_COUNT
        ? INVALID_MONTH_ERR_MSG
        : EXPIRY_ERR_MSG;
    updateErrInfo(index, hasErr, errMsg);
  };

  const firstErrIdx = errInfo.errFlags.indexOf(true);
  const hasAnyErr = firstErrIdx !== -1;
  const errMsg = hasAnyErr ? errInfo.errMessages[firstErrIdx] : '';
  const isComplete =
    isValidExpiry(expiryDate[MONTH_FIELD_INDEX], MONTH_FIELD_INDEX) &&
    isValidExpiry(expiryDate[YEAR_FIELD_INDEX], YEAR_FIELD_INDEX);

  return {
    expiryDate,
    isComplete,
    hasAnyErr,
    firstErrIdx,
    errMsg,
    handleChange,
    handleBlur,
  };
}
