import { useState } from 'react';
import { isValidCVCNumberInput } from '@utils/validator';
import { ERROR_MESSAGE } from '@constants/index';

const initialState = { isSuccess: false, isError: false, errorMessage: '' };

const useChangeCVCNumber = () => {
  const [cvcNumber, setCVCNumber] = useState('');
  const [cvcNumberState, setCVCNumberState] = useState(initialState);

  const handleCVCNumberChange = (value: string) => {
    if (!isValidCVCNumberInput(value)) {
      setCVCNumberState((prev) => ({ ...prev, isError: true, errorMessage: ERROR_MESSAGE.invalidCVCNumberInput }));
      return;
    }

    if (value.length === 3) {
      setCVCNumberState({ ...initialState, isSuccess: true });
    }
    // else {
    //   setCVCNumberState(initialState);
    // }

    setCVCNumber(value);
  };

  return { cvcNumber, cvcNumberState, handleCVCNumberChange };
};

export default useChangeCVCNumber;
