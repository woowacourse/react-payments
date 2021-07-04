import { useState } from 'react';

import { isNumber } from '../utils/validator';

export const useSecurityCode = () => {
  const initialState = '';
  const [securityCode, setSecurityCode] = useState(initialState);

  const handleSecurityCodeInput = ({ target: { value } }) => {
    isNumber(value) && setSecurityCode(value.trim());
  };

  return {
    securityCode: {
      value: securityCode,
      handleChange: handleSecurityCodeInput,
      reset: () => setSecurityCode(initialState),
    },
  };
};
