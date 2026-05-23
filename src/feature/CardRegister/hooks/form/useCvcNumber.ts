import {useState} from 'react';
import {createFlags, createErrInfo, updateTouched, updateErrInfo} from '../../utils/fieldErrorUtils';

const MIN_CVC_DIGIT_COUNT = 3;
const MAX_CVC_DIGIT_COUNT = 4;
const CVC_FIELD_COUNT = 1;

const CVC_ERR_MSG = `CVC 번호 ${MIN_CVC_DIGIT_COUNT}~${MAX_CVC_DIGIT_COUNT}자리를 입력해 주세요`;

const isValidCvcLength = (value: string) => value.length >= MIN_CVC_DIGIT_COUNT && value.length <= MAX_CVC_DIGIT_COUNT;

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
    if (!/^\d*$/.test(inputValue) || inputValue.length > MAX_CVC_DIGIT_COUNT) return;

    // 2. 값 반영
    setCvcNumber(inputValue);

    // 3. 이미 touched 상태에서 3~4자리가 되면 에러 해제
    if (isTouched[0] && isValidCvcLength(inputValue)) applyErrInfo(false);
  };

  const handleBlur = (rawValue: string) => {
    // 1. touched 기록
    const inputValue = rawValue.trim();
    setIsTouched((prev) => updateTouched(prev, 0));

    // 2. 3~4자리가 아니면 에러 표시
    applyErrInfo(!isValidCvcLength(inputValue));
  };

  const firstErrIdx = errInfo.errFlags.indexOf(true);
  const hasAnyErr = firstErrIdx !== -1;
  const errMsg = hasAnyErr ? errInfo.errMessages[firstErrIdx] : '';

  const isComplete = isValidCvcLength(cvcNumber);

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
