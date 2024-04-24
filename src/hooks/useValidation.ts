import { useCallback, useState } from 'react';
import { IErrorStatus } from '../validators/index.d';

type TValidate = (value: string) => IErrorStatus;

const useValidation = (state: string, validate: TValidate) => {
  const [errorStatus, setErrorStatus] = useState<IErrorStatus>({
    errorMessage: '',
    isError: false,
  });

  const validateValue = useCallback(() => {
    setErrorStatus(validate(state));
  }, [state, validate]);

  return { errorStatus, validateValue };
};

export default useValidation;
