import React, { ChangeEvent } from 'react';

import useInput from './useInput';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  maxLength?: number;
  extraHandleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input(props: InputProps) {
  const { extraHandleChange, maxLength } = props;

  const { value, handleChange } = useInput({
    initialValue: undefined,
    maxLength,
    extraHandleChange,
  });

  return <input {...props} value={value} onChange={handleChange} />;
}

export default Input;
