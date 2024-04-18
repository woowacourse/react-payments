import React from 'react';

import styles from './style.module.css';
import useInput, { UseInputProps } from './useInput';

interface InputProps
  extends React.HTMLProps<HTMLInputElement>,
    Omit<UseInputProps, 'initialValue'> {
  error: boolean;
}

function Input(props: InputProps) {
  const { maxLength, error } = props;

  const { value, handleChange } = useInput({
    initialValue: undefined,
    maxLength,
  });
  const className = `${styles.input} ${error ? styles.error : ''}`;

  return (
    <input
      className={className}
      {...props}
      value={value}
      onChange={handleChange}
    />
  );
}

export default Input;
