import { useState } from 'react';

type ErrorMessage = string;

const convertArrayIntoObject = (keys: string[]) => {
  const obj: Record<string, boolean> = {};

  keys.forEach(key => {
    obj[key] = false;
  });

  return obj;
};

const useInputs = <T extends Record<string, string>>(
  initialValue: T,
  inquireValidity: (value: string) => ErrorMessage,
) => {
  const [value, setValue] = useState(initialValue);
  const initialErrorStatus = convertArrayIntoObject(Object.keys(initialValue));
  const [errorStatus, setErrorStatus] = useState(initialErrorStatus);
  const [errorMessage, setErrorMessage] = useState('');

  const generateChangeHandler = (targetKey: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [targetKey]: e.target.value,
    });
  };

  const generateErrorMessageUpdater = (key: string) => () => {
    const foundErrorMessage = inquireValidity(value[key]);

    setErrorStatus({
      ...errorStatus,
      [key]: Boolean(foundErrorMessage),
    });

    setErrorMessage(foundErrorMessage);
  };

  return {
    value,
    setValue,
    generateChangeHandler,
    generateErrorMessageUpdater,
    errorStatus,
    errorMessage,
  };
};

export default useInputs;
