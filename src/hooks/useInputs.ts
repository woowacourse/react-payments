import { useState } from 'react';
import { ErrorDetail } from '../components/types/error';
import { CardNumberKey } from '../components/types/card';
import { INITIAL_ERROR_VALUE } from '../constants/error';
import { convertArrayIntoObject } from '../utils/util';

const useInputs = <T extends Record<string, string>>(initialValue: T, validate?: (value: string) => ErrorDetail) => {
  const initialErrorStatus = convertArrayIntoObject(Object.keys(initialValue), INITIAL_ERROR_VALUE);
  const [value, setValue] = useState(initialValue);
  const [errorInfo, setErrorInfo] = useState(initialErrorStatus);

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
  };
};

export default useInputs;
