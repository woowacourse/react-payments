import { useCallback, useState } from 'react';
import { ErrorDetail } from '../components/types/error';
import { CardNumberKey } from '../components/types/card';
import { INITIAL_ERROR_VALUE } from '../constants/error';

const convertArrayIntoObject = <T>(keys: string[], initialValue: T) => {
  const obj: Record<string, T> = {};

  keys.forEach(key => {
    obj[key] = initialValue;
  });

  return obj;
};

const useInputs = <T extends Record<string, string>>(initialValue: T, validate?: (value: string) => ErrorDetail) => {
  const initialErrorStatus = convertArrayIntoObject(Object.keys(initialValue), INITIAL_ERROR_VALUE);
  const [value, setValue] = useState(initialValue);
  const [errorInfo, setErrorInfo] = useState(initialErrorStatus);

  const getErrorMessage = useCallback(() => {
    const errorDetails = Object.values(errorInfo);
    const firstErrorElement = errorDetails.find(value => value.isError);
    return firstErrorElement ? firstErrorElement.errorMessage : '';
  }, [errorInfo]);

  const errorMessage = getErrorMessage();

  const generateChangeHandler = (targetKey: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [targetKey]: e.target.value,
    });
  };

  const generateErrorMessageUpdater = (key: CardNumberKey) => () => {
    if (validate) {
      const validationResult = validate(value[key]);

      setErrorInfo({
        ...errorInfo,
        [key]: {
          ...validationResult,
        },
      });
    }
  };

  return {
    value,
    setValue,
    generateChangeHandler,
    generateErrorMessageUpdater,
    errorInfo,
    errorMessage,
  };
};

export default useInputs;
