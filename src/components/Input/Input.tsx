import styles from './Input.module.css';
import { InputHTMLAttributes, forwardRef } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & { width: string };

const Input = forwardRef<HTMLInputElement, InputProps>(({ width, ...rest }, ref) => {
  return (
    <>
      <input className={styles.input} style={{ width }} ref={ref} autoComplete="off" {...rest} />
    </>
  );
});

export default Input;
