import { useState } from 'react';

const useFormInput = (initialState: Record<string, string>) => {
  const [state, setState] = useState(initialState);

  const handleInputChange = (name: string, value: string) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  return [state, handleInputChange] as const;
};

export default useFormInput;
