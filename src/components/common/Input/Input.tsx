import { forwardRef, useState } from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ isError, onFocus, onBlur, onChange, ...rest }, ref) => {
  const [isFocus, setIsFocus] = useState(false);

  // TODO: props 리펙
  return (
    <input
      className={`${styles.customInput} ${isFocus ? styles.isFocus : ''} ${isError ? styles.isError : ''}`}
      ref={ref}
      {...rest}
      onFocus={(e) => {
        if (onFocus) onFocus(e);
        setIsFocus(true);
      }}
      onBlur={(e) => {
        setIsFocus(false);
        if (onBlur) onBlur(e);
      }}
      onChange={onChange}
    />
  );
});

export default Input;
