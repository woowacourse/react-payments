import { useCallback, useState } from 'react';
import { IErrorStatus } from '../validators/index.d';

type TValidate = (value: string) => IErrorStatus;

const useValidation = (value: string, validate: TValidate) => {
  const [errorStatus, setErrorStatus] = useState<IErrorStatus>({
    errorMessage: '',
    isError: false,
  });

  const updateErrorStatus = useCallback(
    (targetValue: string = value) => {
      setErrorStatus(validate(targetValue));
    },
    [value, validate],
  );

  return { errorStatus, updateErrorStatus };
};

export default useValidation;
