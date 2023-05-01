import { useState } from 'react';
import { REG_EXP } from '../constants/regexp';

const useSecurityCode = () => {
  const [securityCode, setSecurityCode] = useState<string>('');

  const isSetSecurityCode = (value: string) => {
    if (REG_EXP.cardNumberLimit.test(value)) return false;

    setSecurityCode(value);
    return true;
  };

  return { securityCode, isSetSecurityCode };
};

export default useSecurityCode;
