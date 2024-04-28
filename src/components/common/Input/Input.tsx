import { forwardRef } from 'react';
import styles from './Input.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ isError, ...rest }, ref) => {
  const errorInputClass = `${isError ? styles.errorInput : ''}`;

  return <input className={`${styles.inputStyle} ${errorInputClass}`} ref={ref} {...rest} />;
});

export default Input;
