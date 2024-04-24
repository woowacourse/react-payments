import { useCallback, useState } from 'react';
import { IErrorStatus } from '../validators/index.d';
import convertKeysIntoObject from '../utils/convertKeysIntoObject';

type TValidate = (value: string) => IErrorStatus;

const useValidations = <T extends Record<string, string>>(state: T, validate: TValidate) => {
  const initialErrorStatus = {
    isError: convertKeysIntoObject(Object.keys(state), false),
    errorMessage: '',
  };

  const [errorStatus, setErrorStatus] = useState(initialErrorStatus);

  const validateValue = useCallback(
    (key: keyof T, targetValue: string = state[key]) => {
      const { isError, errorMessage } = validate(targetValue);

      console.log(targetValue);
      setErrorStatus({
        isError: { ...errorStatus.isError, [key]: isError },
        errorMessage,
      });
    },
    [state, validate, errorStatus],
  );

  return { errorStatus, validateValue };
};

export default useValidations;
