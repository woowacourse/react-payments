import React from 'react';

import useInput from './useInput';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  extraHandleChange?: (value: string) => void;
}

function Input(props: InputProps) {
  const { extraHandleChange } = props;

  const { value, handleChange } = useInput({
    initialValue: undefined,
    extraHandleChange,
  });

  return <input {...props} value={value} onChange={handleChange} />;
}

export default Input;
