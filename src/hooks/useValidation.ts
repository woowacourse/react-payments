import { useCallback, useState } from 'react';
import { IErrorStatus } from '../validators/index.d';

type TValidate = (value: string) => IErrorStatus;

const useValidation = (state: string, validate: TValidate) => {
  const [errorStatus, setErrorStatus] = useState<IErrorStatus>({
    errorMessage: '',
    isError: false,
  });

  const validateValue = useCallback(
    (targetValue = state) => {
      setErrorStatus(validate(targetValue));
    },
    [state, validate],
  );

  return { errorStatus, validateValue };
};

export default useValidation;
