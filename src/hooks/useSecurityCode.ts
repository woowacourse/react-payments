import { useState } from 'react';

const useSecurityCode = () => {
  const [securityCode, setSecurityCode] = useState<string>('');

  const isSetSecurityCode = (value: string) => {
    if (/[^0-9]/g.test(value)) return false;

    setSecurityCode(value);
    return true;
  };

  return { securityCode, isSetSecurityCode };
};

export default useSecurityCode;
