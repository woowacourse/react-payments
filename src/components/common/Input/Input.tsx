import { forwardRef } from 'react';
import styles from './Input.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, type = 'text', maxLength = 4, isError = false, placeholder, value, onChange, onFocus }, ref) => {
    const errorInputClass = `${isError ? styles.errorInput : ''}`;

    return (
      <input
        className={`${styles.inputStyle} ${errorInputClass}`}
        id={id}
        ref={ref}
        maxLength={maxLength}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onFocus}
        onFocus={onFocus}
      />
    );
  },
);

export default Input;
