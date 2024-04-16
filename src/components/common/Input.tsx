import React from 'react';

import styles from './Input.module.css';
interface InputProps {
  name: string;
  value: string;
  isError: boolean;
  placeholder: string;
  maxLength?: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function Input({
  name,
  value,
  placeholder,
  isError,
  maxLength = 0,
  handleChange,
  handleOnBlur,
}: InputProps) {
  return (
    <input
      name={name}
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      onChange={handleChange}
      onBlur={handleOnBlur}
      className={`${styles.input} ${isError && styles.error}`}
    ></input>
  );
}
