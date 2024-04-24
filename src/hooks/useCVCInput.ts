import { useState } from 'react';

import INPUT_REGEX from '../constants/regex';

function useCVCInput(maxLength: number) {
  const [CVCNumber, setCVCNumber] = useState('');
  const [CVCNumberError, setCVCNumberError] = useState(false);

  const handleCVCNumberChange = (value: string) => {
    const trimmedValue = value.slice(0, maxLength);

    setCVCNumber(trimmedValue);
    setCVCNumberError(!INPUT_REGEX.CVCNumber.test(trimmedValue));
  };

  return {
    CVCNumber,
    CVCNumberError,
    handleCVCNumberChange,
  };
}

export default useCVCInput;
