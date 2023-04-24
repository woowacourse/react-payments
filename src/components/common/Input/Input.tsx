import styles from './Input.module.css';
import { forwardRef } from 'react';

type InputProps = {
  width: string;
  value: string;
  name?: string;
  placeholder?: string;
  maxLength?: number;
  required?: boolean;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ width, value, name, placeholder, maxLength, required, type, onChange }, ref) => {
    return (
      <input
        className={styles.input}
        name={name}
        style={{ width: width }}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        type={type}
        required={required}
        ref={ref}
      />
    );
  }
);

export default Input;
