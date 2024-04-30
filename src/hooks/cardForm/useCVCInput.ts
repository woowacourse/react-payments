import { useState } from 'react';

import { INPUT_REGEX } from '../../constants/regex';

function useCVCInput(maxLength: number) {
  const [CVCNumber, setCVCNumber] = useState('');
  const [CVCNumberError, setCVCNumberError] = useState(false);
  const [isCVCNumberFilled, setIsCVCNumberFilled] = useState(false);
  const [showCardBack, setShowCardBack] = useState(false);

  const handleCVCNumberChange = (value: string) => {
    const trimmedValue = value.slice(0, maxLength);

    setCVCNumber(trimmedValue);

    setCVCNumberError(!INPUT_REGEX.CVCNumber.test(trimmedValue));

    if (!isCVCNumberFilled && trimmedValue.length === maxLength) {
      setIsCVCNumberFilled(true);
    }
  };

  const handleShowCardBack = () => {
    setShowCardBack((prev) => !prev);
  };

  return {
    CVCNumber,
    CVCNumberError,
    isCVCNumberFilled,
    showCardBack,
    handleCVCNumberChange,
    handleShowCardBack,
  };
}

export default useCVCInput;
