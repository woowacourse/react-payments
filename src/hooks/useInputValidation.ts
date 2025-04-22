import { useState } from 'react';
import { HandleInputParams } from '../components/CardPage/CardPage';
import useErrorArrayState from './useErrorStateUpdate';

function useInputValidation(
  initialErrorState: boolean[],
  validationFn: (e: React.ChangeEvent<HTMLInputElement>) => void
) {
  const { isError, updateErrorState } = useErrorArrayState(initialErrorState.length, () =>
    setErrorMessage('')
  );
  const [errorMessage, setErrorMessage] = useState('');

  const validate = ({ e, idx }: HandleInputParams) => {
    try {
      validationFn(e);
      updateErrorState(idx, false);
    } catch (error) {
      updateErrorState(idx, true);
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  };

  return {
    isError,
    errorMessage,
    validate,
  };
}

export default useInputValidation;
