import { ChangeEventHandler, useState } from 'react';

const useInput = (initialState = '') => {
  const [state, setState] = useState(initialState);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setState(event.target.value);
  };

  return [state, handleChange] as const;
};
export default useInput;
