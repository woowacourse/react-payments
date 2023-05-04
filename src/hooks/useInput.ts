import { useState } from 'react';

import { InputStatus } from '../type';

const useInput = (formatDispatcher: (str: string) => InputStatus, init: InputStatus = 'INIT') => {
  const [status, setStatus] = useState<InputStatus>(init);
  const [value, setValue] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setStatus(formatDispatcher(inputValue));
    setValue(inputValue);
  };

  return { value, status, onChange };
};

export default useInput;
