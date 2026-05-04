import cn from 'classnames';
import styles from './Input.module.css';

import type { ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> {
  type?: 'text' | 'tel';
  isError?: boolean;
}

export const Input = ({ type = 'text', placeholder, maxLength, isError, value, onChange, onBlur }: InputProps) => {
  return (
    <input
      type={type}
      className={cn(styles.input, isError && styles.isError)}
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};
