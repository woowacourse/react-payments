import { useState } from 'react';

type INPUT_STATUS = 'INIT' | 'VALID' | 'INVALID';

const useInputs = (formatDispatcher: (str: string) => INPUT_STATUS, init = '') => {
  const [status, setStatus] = useState<INPUT_STATUS>('INIT');
  const [value, setValue] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setStatus(formatDispatcher(inputValue));
    setValue(inputValue);
  };

  return { value, status, onChange };
};

export default useInputs;
