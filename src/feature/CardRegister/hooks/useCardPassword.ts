import {useState} from 'react';
import {createFlags, createErrInfo, computeNextTouched, computeNextErrInfo} from '../utils/fieldErrorUtils';

const PASSWORD_DIGIT_COUNT = 2;
const PASSWORD_ERR_MSG = `비밀번호 앞 ${PASSWORD_DIGIT_COUNT}자리를 입력해 주세요`;
const PASSWORD_FIELD_COUNT = 1;

export function useCardPassword() {
  const [password, setPassword] = useState('');
  const [errInfo, setErrInfo] = useState(createErrInfo(PASSWORD_FIELD_COUNT));
  const [isTouched, setIsTouched] = useState<boolean[]>(createFlags(PASSWORD_FIELD_COUNT));

  const updateErrInfo = (hasErr: boolean) => {
    setErrInfo(computeNextErrInfo(errInfo.errFlags, errInfo.errMessages, 0, hasErr, PASSWORD_ERR_MSG));
  };

  const handleChange = (rawValue: string) => {
    const inputValue = rawValue.trim();
    if (!/^\d*$/.test(inputValue) || inputValue.length > PASSWORD_DIGIT_COUNT) return;

    setPassword(inputValue);
    if (isTouched[0] && inputValue.length === PASSWORD_DIGIT_COUNT) updateErrInfo(false);
  };

  const handleBlur = (rawValue: string) => {
    const inputValue = rawValue.trim();
    setIsTouched((prev) => computeNextTouched(prev, 0));
    updateErrInfo(inputValue.length !== PASSWORD_DIGIT_COUNT);
  };

  const isComplete = password.length === PASSWORD_DIGIT_COUNT;
  const firstErrIdx = errInfo.errFlags.indexOf(true);
  const hasAnyErr = firstErrIdx !== -1;
  const errMsg = hasAnyErr ? errInfo.errMessages[firstErrIdx] : '';

  return {
    password,
    isComplete,
    firstErrIdx,
    errMsg,
    handleChange,
    handleBlur,
  };
}
