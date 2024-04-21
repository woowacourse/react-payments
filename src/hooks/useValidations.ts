import { useCallback, useState } from 'react';
import { IErrorStatus } from '../validators/index.d';
import convertKeysIntoObject from '../utils/convertKeysIntoObject';

type TValidate = (value: string) => IErrorStatus;

const useValidations = <T extends Record<string, string>>(value: T, validate: TValidate) => {
  const initialErrorStatus = {
    isError: convertKeysIntoObject(Object.keys(value), false),
    errorMessage: '',
  };

  const [errorStatus, setErrorStatus] = useState(initialErrorStatus);

  const updateErrorStatus = useCallback(
    (key: keyof T) => {
      const { isError, errorMessage } = validate(value[key]);

      setErrorStatus({
        isError: { ...errorStatus.isError, [key]: isError },
        errorMessage,
      });
    },
    [value, validate, errorStatus],
  );

  return { errorStatus, updateErrorStatus };
};

export default useValidations;
