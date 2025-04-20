import { useState } from 'react';
import { HandleInputParams } from '../pages/CardPage/CardPage';
function useInputValidation(
  initialErrorState: boolean[],
  validationFn: (e: React.ChangeEvent<HTMLInputElement>) => void
) {
  const [isError, setIsError] = useState(initialErrorState);
  const [errorMessage, setErrorMessage] = useState('');

  const validate = ({ e, idx }: HandleInputParams) => {
    try {
      validationFn(e);

      setIsError((prev) => {
        const updated = [...prev];
        updated[idx] = false;

        if (updated.every((error) => error === false)) {
          setErrorMessage('');
        }

        return updated;
      });
    } catch (error) {
      setIsError((prev) => {
        const updated = [...prev];
        updated[idx] = true;
        return updated;
      });

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
