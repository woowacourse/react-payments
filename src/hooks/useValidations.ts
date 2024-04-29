import { useState } from 'react';

export type ValidationType = {
  isError: (value: string) => boolean;
  errorMessage: string;
};

const useValidations = () => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validate = (value: string, validations: ValidationType[]) => {
    const result = validations.find(({ isError }) => isError(value));

    if (result) {
      setIsError(true);
      setErrorMessage(result.errorMessage);
      return false;
    }

    setIsError(false);
    setErrorMessage('');

    return true;
  };

  return { isError, errorMessage, validate };
};

export default useValidations;
