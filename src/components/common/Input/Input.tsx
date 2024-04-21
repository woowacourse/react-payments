import React from 'react';

import styles from './Input.module.css';
import clsx from 'clsx';

interface InputProps {
  name: string;
  id: string;
  value: string;
  isError: boolean;
  placeholder: string;
  isRequired?: boolean;
  maxLength?: number;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function Input({
  name,
  id,
  value,
  placeholder,
  isError,
  maxLength,
  isRequired = false,
  handleChange,
  handleOnBlur,
}: InputProps) {
  return (
    <input
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      required={isRequired}
      onChange={handleChange}
      onBlur={handleOnBlur}
      className={clsx(styles.input, { [styles.error]: isError })}
    />
  );
}
