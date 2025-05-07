import styles from './Input.module.css';
import { forwardRef, InputHTMLAttributes } from 'react';

type Props = {
  isValid: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'ref'>;

export default forwardRef<HTMLInputElement, Props>(function Input({ isValid, className, ...rest }, ref) {
  return (
    <input
      className={`${styles.input} ${isValid ? styles.valid : styles.inValid} ${className ?? ''}`}
      {...rest}
      ref={ref}
    />
  );
});
