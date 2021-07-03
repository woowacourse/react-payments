import { useState } from 'react';
import { isNumber } from '../utils/validator';

export const useSecurityCode = () => {
  const [securityCode, setSecurityCode] = useState('');

  const handleSecurityCodeInput = ({ target: { value } }) => {
    isNumber(value) && setSecurityCode(value.trim());
  };

  return {
    securityCode: {
      value: securityCode,
      handleChange: handleSecurityCodeInput,
    },
  };
};
