import React, { forwardRef, useEffect } from 'react';
import { InputType } from './Input.type';
import styles from './Input.module.css';

export interface InputProps {
  id?: string;
  type?: InputType;
  value?: string | number;
  isError?: boolean;
  maxLength?: number;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  nextRef?: React.RefObject<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, maxLength, isError = false, placeholder, value, onChange, nextRef }, ref) => {
    const errorInputClass = `${isError ? styles.errorInput : ''}`;

    useEffect(() => {
      if (value && value.toString().length === maxLength) {
        nextRef?.current?.focus();
      }
    }, [value]);

    return (
      <input
        className={`${styles.inputStyle} ${errorInputClass}`}
        id={id}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={ref}
      />
    );
  },
);

export default Input;
