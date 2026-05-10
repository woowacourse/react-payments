import {useState} from 'react';
import {createFlags, createErrInfo, updateTouched, updateErrInfo} from '../../utils/fieldErrorUtils';

const PASSWORD_DIGIT_COUNT = 2;
const PASSWORD_FIELD_COUNT = 1;

const PASSWORD_ERR_MSG = `비밀번호 앞 ${PASSWORD_DIGIT_COUNT}자리를 입력해 주세요`;

export function useCardPassword() {
  const [password, setPassword] = useState('');
  const [errInfo, setErrInfo] = useState(createErrInfo(PASSWORD_FIELD_COUNT));
  const [isTouched, setIsTouched] = useState<boolean[]>(createFlags(PASSWORD_FIELD_COUNT));

  const applyErrInfo = (hasErr: boolean) => {
    setErrInfo(updateErrInfo(errInfo.errFlags, errInfo.errMessages, 0, hasErr, PASSWORD_ERR_MSG));
  };

  const handleChange = (rawValue: string) => {
    // 1. 숫자 아닌 입력이나 자릿수 초과는 무시
    const inputValue = rawValue.trim();
    if (!/^\d*$/.test(inputValue) || inputValue.length > PASSWORD_DIGIT_COUNT) return;

    // 2. 값 반영
    setPassword(inputValue);

    // 3. 이미 touched 상태에서 완성되면 에러 해제
    if (isTouched[0] && inputValue.length === PASSWORD_DIGIT_COUNT) applyErrInfo(false);
  };

  const handleBlur = (rawValue: string) => {
    // 1. touched 기록
    const inputValue = rawValue.trim();
    setIsTouched((prev) => updateTouched(prev, 0));

    // 2. 자릿수 불일치 시 에러 표시
    applyErrInfo(inputValue.length !== PASSWORD_DIGIT_COUNT);
  };

  const firstErrIdx = errInfo.errFlags.indexOf(true);
  const hasAnyErr = firstErrIdx !== -1;
  const errMsg = hasAnyErr ? errInfo.errMessages[firstErrIdx] : '';

  const isComplete = password.length === PASSWORD_DIGIT_COUNT;

  return {
    password,
    isComplete,
    firstErrIdx,
    errMsg,
    handleChange,
    handleBlur,
  };
}
