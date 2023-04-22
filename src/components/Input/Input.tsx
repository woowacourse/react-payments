import styles from './Input.module.css';
import { forwardRef } from 'react';

type InputProps = {
  width: string;
  value: string;
  name?: string;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = forwardRef<HTMLInputElement, InputProps>(({ width, value, name, maxLength, onChange, ...rest }, ref) => {
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
        {...rest}
      />
    </>
  );
});

Input.defaultProps = {
  onChange: undefined,
  maxLength: 9999999,
};

export default Input;
