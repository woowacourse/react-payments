import {useState} from 'react';
import {createFlags, computeNextTouched, computeNextErrInfo} from './fieldErrorUtils';

const CVC_DIGIT_COUNT = 3;
const CVC_ERR_MSG = `CVC 번호 ${CVC_DIGIT_COUNT}자리를 입력해 주세요`;

export function useCvcNumber() {
  const [cvcNumber, setCvcNumber] = useState('');
  const [errInfo, setErrInfo] = useState({
    errFlags: createFlags(1),
    errMessages: Array(1).fill('') as string[],
  });
  const [isTouched, setIsTouched] = useState<boolean[]>(createFlags(1));

  const updateErrInfo = (hasErr: boolean) => {
    setErrInfo(computeNextErrInfo(errInfo.errFlags, errInfo.errMessages, 0, hasErr, CVC_ERR_MSG));
  };

  const handleChange = (rawValue: string) => {
    const inputValue = rawValue.trim();
    if (!/^\d*$/.test(inputValue) || inputValue.length > CVC_DIGIT_COUNT) return;
    setCvcNumber(inputValue);
    if (isTouched[0] && inputValue.length === CVC_DIGIT_COUNT) updateErrInfo(false);
  };

  const handleBlur = (rawValue: string) => {
    const inputValue = rawValue.trim();
    setIsTouched((prev) => computeNextTouched(prev, 0));
    updateErrInfo(inputValue.length !== CVC_DIGIT_COUNT);
  };

  const isComplete = cvcNumber.length === CVC_DIGIT_COUNT;
  const firstErrIdx = errInfo.errFlags.indexOf(true);
  const hasAnyErr = firstErrIdx !== -1;
  const errMsg = hasAnyErr ? errInfo.errMessages[firstErrIdx] : '';

  return {
    cvcNumber,
    isComplete,
    hasAnyErr,
    firstErrIdx,
    errMsg,
    handleChange,
    handleBlur,
  };
}
