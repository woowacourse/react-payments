import { useState } from 'react';

type ErrorMessage = string;

const useInputs = <T extends Record<string, string>>(
  initialValue: T,
  inquireValidity: (value: string) => ErrorMessage,
) => {
  const [value, setValue] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });

  const generateChangeHandler = (targetKey: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [targetKey]: e.target.value,
    });
  };

  const generateErrorMessageUpdater = (key: string) => () => {
    setErrorMessage({
      ...errorMessage,
      [key]: inquireValidity(value[key]),
    });
  };

  return {
    value,
    setValue,
    generateChangeHandler,
    generateErrorMessageUpdater,
    errorMessage,
  };
};

export default useInputs;
