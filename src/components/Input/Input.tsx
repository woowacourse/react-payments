import styles from './Input.module.css';
import { forwardRef } from 'react';

type InputProps = {
  width: string;
  value: string;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = forwardRef<HTMLInputElement, InputProps>(({ width, value, maxLength, onChange }, ref) => {
  return (
    <>
      <input
        className={styles.input}
        style={{ width: width }}
        value={value}
        maxLength={maxLength ? maxLength : 9999999}
        onChange={onChange}
        ref={ref}
      />
    </>
  );
});

Input.defaultProps = {
  onChange: undefined,
};

export default Input;
