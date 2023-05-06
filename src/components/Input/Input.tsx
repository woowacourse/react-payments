import styles from './Input.module.css';
import { forwardRef } from 'react';

type InputProps = {
  width: string;
  value: string;
  name?: string;
  className?: string;
  maxLength?: number;
  type?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = forwardRef<HTMLInputElement, InputProps>(({ width, ...rest }, ref) => {
  return (
    <>
      <input className={styles.input} style={{ width }} ref={ref} autoComplete="off" {...rest} />
    </>
  );
});

export default Input;
