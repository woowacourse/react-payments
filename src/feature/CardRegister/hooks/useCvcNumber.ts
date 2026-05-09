import {useState} from 'react';
import {createFlags, computeNextTouched, computeNextErrorInfo} from './fieldErrorUtils';

const CVC_LENGTH = 3;
const ERROR_MSG = 'CVC 번호 3자리를 입력해 주세요';

export function useCvcNumber() {
  const [cvcNumber, setCvcNumber] = useState('');
  const [errorInfo, setErrorInfo] = useState({
    errorFlags: createFlags(1),
    errorMessages: Array(1).fill('') as string[],
    currentErrorMsg: '',
  });
  const [isTouched, setIsTouched] = useState<boolean[]>(createFlags(1));

  const updateErrorInfo = (hasError: boolean) => {
    const next = computeNextErrorInfo(errorInfo.errorFlags, errorInfo.errorMessages, 0, hasError, ERROR_MSG);
    setErrorInfo(next);
  };

  const handleChange = (value: string) => {
    const trimmed = value.trim();
    if (!/^\d*$/.test(trimmed) || trimmed.length > CVC_LENGTH) return;
    setCvcNumber(trimmed);
    if (isTouched[0] && trimmed.length === CVC_LENGTH) updateErrorInfo(false);
  };

  const handleBlur = (value: string) => {
    setIsTouched((prev) => computeNextTouched(prev, 0));
    updateErrorInfo(value.length !== CVC_LENGTH);
  };

  const isComplete = cvcNumber.length === CVC_LENGTH;
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
