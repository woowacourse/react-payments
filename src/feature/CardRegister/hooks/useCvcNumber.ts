import {useState} from 'react';
import {createFlags, computeNextTouched, computeNextErrorInfo} from './fieldErrorUtils';

const CVC_DIGIT_COUNT = 3;
const CVC_ERROR_MSG = 'CVC 번호 3자리를 입력해 주세요';

export function useCvcNumber() {
  const [cvcNumber, setCvcNumber] = useState('');
  const [errorInfo, setErrorInfo] = useState({
    errorFlags: createFlags(1),
    errorMessages: Array(1).fill('') as string[],
    currentErrorMsg: '',
  });
  const [isTouched, setIsTouched] = useState<boolean[]>(createFlags(1));

  const updateErrorInfo = (hasError: boolean) => {
    const nextErrorInfo = computeNextErrorInfo(errorInfo.errorFlags, errorInfo.errorMessages, 0, hasError, CVC_ERROR_MSG);
    setErrorInfo(nextErrorInfo);
  };

  const handleChange = (value: string) => {
    const inputValue = value.trim();
    if (!/^\d*$/.test(inputValue) || inputValue.length > CVC_DIGIT_COUNT) return;
    setCvcNumber(inputValue);
    if (isTouched[0] && inputValue.length === CVC_DIGIT_COUNT) updateErrorInfo(false);
  };

  const handleBlur = (value: string) => {
    setIsTouched((prev) => computeNextTouched(prev, 0));
    updateErrorInfo(value.length !== CVC_DIGIT_COUNT);
  };

  const isComplete = cvcNumber.length === CVC_DIGIT_COUNT;
  const firstErrorIdx = errorInfo.errorFlags.indexOf(true);

  return {
    cvcNumber,
    isComplete,
    hasAnyError: firstErrorIdx !== -1,
    firstErrorIdx,
    errorMsg: errorInfo.currentErrorMsg,
    handleChange,
    handleBlur,
  };
}
