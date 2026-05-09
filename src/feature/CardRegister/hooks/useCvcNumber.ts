import {useState} from 'react';
import {createFlags, createErrInfo, computeNextTouched, computeNextErrInfo} from './fieldErrorUtils';

const CVC_DIGIT_COUNT = 3;
const CVC_ERR_MSG = `CVC 번호 ${CVC_DIGIT_COUNT}자리를 입력해 주세요`;
const CVC_FIELD_COUNT = 1;

export function useCvcNumber() {
  const [cvcNumber, setCvcNumber] = useState('');
  const [errInfo, setErrInfo] = useState(createErrInfo(CVC_FIELD_COUNT));
  const [isTouched, setIsTouched] = useState<boolean[]>(createFlags(CVC_FIELD_COUNT));

  const updateErrInfo = (hasErr: boolean, fieldIndex = 0) => {
    setErrInfo(computeNextErrInfo(errInfo.errFlags, errInfo.errMessages, fieldIndex, hasErr, CVC_ERR_MSG));
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
