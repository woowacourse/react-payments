import { useState } from 'react';
import { REG_EXP } from '../constants/regexp';

const useSecurityCode = () => {
  const [securityCode, setSecurityCode] = useState<string>('');
  const [securityCodeError, setSecurityCodeError] = useState('');

  const handleSecurityCode = (value: string) => {
    if (REG_EXP.cardNumberLimit.test(value)) {
      setSecurityCodeError('보안 코드는 세 자리의 숫자로만 입력해주세요.');
      return;
    }

    setSecurityCodeError('');
    setSecurityCode(value);
  };

  return { securityCode, securityCodeError, handleSecurityCode };
};

export default useSecurityCode;
