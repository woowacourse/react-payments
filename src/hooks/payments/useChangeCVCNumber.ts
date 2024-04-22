import { useState } from 'react';
import { isValidCVCNumberInput } from '@utils/validator';
import { ERROR_MESSAGE } from '@constants/index';

const useChangeCVCNumber = () => {
  const [cvcNumber, setCVCNumber] = useState('');
  const [cvcNumberError, setCVCNumberError] = useState({ isError: false, errorMessage: '' });

  const handleCVCNumberChange = (value: string) => {
    if (!isValidCVCNumberInput(value)) {
      setCVCNumberError({ isError: true, errorMessage: ERROR_MESSAGE.invalidCVCNumberInput });
      return;
    }

    setCVCNumber(value);
    setCVCNumberError({ isError: false, errorMessage: '' });
  };

  return { cvcNumber, cvcNumberError, handleCVCNumberChange };
};

export default useChangeCVCNumber;
