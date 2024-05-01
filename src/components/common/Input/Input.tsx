import React, { forwardRef } from 'react';

import clsx from 'clsx';
import styles from './Input.module.css';

interface InputProps {
  name: string;
  id: string;
  value: string;
  placeholder: string;
  isError: boolean;
  isRequired?: boolean;
  maxLength?: number;
  type?: 'text' | 'password';
  autoFocus?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = forwardRef(function Input(
  {
    name,
    id,
    value,
    type = 'text',
    placeholder,
    maxLength,
    isError,
    isRequired,
    autoFocus,
    onChange,
    onBlur,
  }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <input
      ref={ref}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      required={isRequired}
      onChange={onChange}
      onBlur={onBlur}
      autoFocus={autoFocus}
      className={clsx(styles.input, { [styles.error]: isError })}
    />
  );
});

export default Input;
