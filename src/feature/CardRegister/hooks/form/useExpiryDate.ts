import {useState} from 'react';
import {createFlags, createErrInfo, updateTouched, updateErrInfo} from '../../utils/fieldErrorUtils';

const EXPIRY_ERR_MSG = '2자리를 입력해 주세요';
const INVALID_MONTH_ERR_MSG = '01~12 사이의 월을 입력해 주세요';

const EXPIRY_FIELD_COUNT = 2;
const EXPIRY_DIGIT_COUNT = 2;

const MONTH_INDEX = 0;
const YEAR_INDEX = 1;

const isValidMonth = (value: string) => {
  const month = Number(value);
  return month >= 1 && month <= 12;
};

const isValidExpiry = (value: string, index: number) => {
  // (공통) 길이 검사
  if (value.length !== EXPIRY_DIGIT_COUNT) return false;

  // (월) 추가적으로 1~12 사이인지 유효성 검사
  if (index === MONTH_INDEX) return isValidMonth(value);

  return true;
};

const getErrMsg = (value: string, index: number) => {
  if (index === MONTH_INDEX && value.length === EXPIRY_DIGIT_COUNT) return INVALID_MONTH_ERR_MSG;
  return EXPIRY_ERR_MSG;
};

const fillZero = (value: string, index: number) => {
  if (value.length !== 1) return undefined;

  //case: month
  if (index === MONTH_INDEX && value !== '0') return `0${value}`;

  //case: year
  if (index === YEAR_INDEX) return `0${value}`;

  return undefined;
};

export function useExpiryDate() {
  const [expiryDate, setExpiryDate] = useState<string[]>(['', '']);
  const [errInfo, setErrInfo] = useState(createErrInfo(EXPIRY_FIELD_COUNT));
  const [isTouched, setIsTouched] = useState<boolean[]>(createFlags(EXPIRY_FIELD_COUNT));

  const applyErrInfo = (index: number, hasErr: boolean, errMsg = EXPIRY_ERR_MSG) => {
    setErrInfo(updateErrInfo(errInfo.errFlags, errInfo.errMessages, index, hasErr, errMsg));
  };

  const clearErrWhenComplete = (index: number, value: string) => {
    // 입력값이 유효하지 않을 때와 첫 입력 중일 땐 입력 무시
    if (!isValidExpiry(value, index) || !isTouched[index]) return;
    // 즉, 첫 입력이 아니고 입력값이 유효할 때 hasErr를 false로 update
    applyErrInfo(index, false);
  };

  const handleChange = (index: number, rawValue: string) => {
    // 1. 숫자 아닌 입력이나 자릿수 초과는 무시
    const newValue = rawValue.trim();
    if (!/^\d*$/.test(newValue) || newValue.length > EXPIRY_DIGIT_COUNT) return;

    // 2. 값 반영
    setExpiryDate((prev) => prev.map((prevValue, i) => (i === index ? newValue : prevValue)));

    // 3. 이미 touched 상태에서 유효한 값이 되면 에러 해제
    clearErrWhenComplete(index, newValue);
  };

  const handleBlur = (index: number, rawValue: string) => {
    // 1. touched 기록
    setIsTouched((prev) => updateTouched(prev, index));

    // 2. 1자리 입력이면 앞자리 0 채움 (예: '9' → '09')
    const value = fillZero(rawValue, index) ?? rawValue;
    setExpiryDate((prev) => prev.map((prevValue, i) => (i === index ? value : prevValue)));

    // 3. 유효성 검사 후 에러 상태 반영
    const hasErr = !isValidExpiry(value, index);
    const errMsg = getErrMsg(value, index);
    applyErrInfo(index, hasErr, errMsg);
  };

  const firstErrIdx = errInfo.errFlags.indexOf(true);
  const hasAnyErr = firstErrIdx !== -1;
  const errMsg = hasAnyErr ? errInfo.errMessages[firstErrIdx] : '';

  const isComplete =
    isValidExpiry(expiryDate[MONTH_INDEX], MONTH_INDEX) && isValidExpiry(expiryDate[YEAR_INDEX], YEAR_INDEX);

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
