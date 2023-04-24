import { useState } from 'react';
import { NOT_A_NUMBER_REGEX } from '../constants/regex';

const useSecurityCode = () => {
  const [securityCode, setSecurityCode] = useState('');

  const checkSecurityCode = (value: string) => {
    if (NOT_A_NUMBER_REGEX.test(value)) return;

    setSecurityCode(value);
  };

  return { securityCode, checkSecurityCode };
};

export default useSecurityCode;
