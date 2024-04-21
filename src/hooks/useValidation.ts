import { useCallback, useState } from 'react';
import { IErrorStatus } from '../validators/index.d';

type TValidate = (value: string) => IErrorStatus;

const useValidation = (state: string, validate: TValidate) => {
  const [errorStatus, setErrorStatus] = useState<IErrorStatus>({
    errorMessage: '',
    isError: false,
  });

  const updateErrorStatus = useCallback(
    (targetValue: string = state) => {
      setErrorStatus(validate(targetValue));
    },
    [state, validate],
  );

  return { errorStatus, updateErrorStatus };
};

export default useValidation;
