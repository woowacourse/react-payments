import styles from './Input.module.css';
import { forwardRef } from 'react';

type InputProps = {
  width: string;
  value: string;
  name?: string;
  maxLength?: number;
  className?: string;
  type?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ width, value, name, maxLength, onChange = undefined, required = false, ...rest }, ref) => {
    return (
      <>
        <input
          className={styles.input}
          name={name}
          style={{ width }}
          value={value}
          maxLength={maxLength}
          onChange={onChange}
          ref={ref}
          required={required}
          autoComplete="off"
          {...rest}
        />
      </>
    );
  }
);

export default Input;
