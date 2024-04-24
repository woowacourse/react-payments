import React from 'react';

import styles from './Input.module.css';
import clsx from 'clsx';

interface InputProps {
  name: string;
  id: string;
  value: string;
  placeholder: string;
  isError: boolean;
  isRequired?: boolean;
  maxLength?: number;
  type?: 'text' | 'password';
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function Input({
  name,
  id,
  value,
  type = 'text',
  placeholder,
  maxLength,
  isError,
  isRequired,
  handleChange,
  handleOnBlur,
}: InputProps) {
  return (
    <input
      id={id}
      name={name}
      type={type}
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
