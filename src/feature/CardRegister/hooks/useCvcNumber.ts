import {useState} from 'react';
import {createFlags, createErrInfo, updateTouched, updateErrInfo} from '../utils/fieldErrorUtils';

const CVC_DIGIT_COUNT = 3;
const CVC_FIELD_COUNT = 1;

const CVC_ERR_MSG = `CVC 번호 ${CVC_DIGIT_COUNT}자리를 입력해 주세요`;

export function useCvcNumber() {
  const [cvcNumber, setCvcNumber] = useState('');
  const [errInfo, setErrInfo] = useState(createErrInfo(CVC_FIELD_COUNT));
  const [isTouched, setIsTouched] = useState<boolean[]>(createFlags(CVC_FIELD_COUNT));

  const applyErrInfo = (hasErr: boolean, fieldIndex = 0) => {
    setErrInfo(updateErrInfo(errInfo.errFlags, errInfo.errMessages, fieldIndex, hasErr, CVC_ERR_MSG));
  };

  const handleChange = (rawValue: string) => {
    // 1. 숫자 아닌 입력이나 자릿수 초과는 무시
    const inputValue = rawValue.trim();
    if (!/^\d*$/.test(inputValue) || inputValue.length > CVC_DIGIT_COUNT) return;

    // 2. 값 반영
    setCvcNumber(inputValue);

    // 3. 이미 touched 상태에서 완성되면 에러 해제
    if (isTouched[0] && inputValue.length === CVC_DIGIT_COUNT) applyErrInfo(false);
  };

  const handleBlur = (rawValue: string) => {
    // 1. touched 기록
    const inputValue = rawValue.trim();
    setIsTouched((prev) => updateTouched(prev, 0));

    // 2. 자릿수 불일치 시 에러 표시
    applyErrInfo(inputValue.length !== CVC_DIGIT_COUNT);
  };

  const firstErrIdx = errInfo.errFlags.indexOf(true);
  const hasAnyErr = firstErrIdx !== -1;
  const errMsg = hasAnyErr ? errInfo.errMessages[firstErrIdx] : '';

  const isComplete = cvcNumber.length === CVC_DIGIT_COUNT;

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
