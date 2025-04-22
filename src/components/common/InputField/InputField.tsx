import { InputHTMLAttributes } from 'react';
import styles from './inputField.module.css';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  isError?: boolean;
};

const InputField = ({
  value,
  name,
  onChange,
  isError = false,
  placeholder,
  onBlur,
  ...rest
}: InputFieldProps) => {
  return (
    <input
      value={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      className={`${styles.input} ${isError ? styles.error : styles.basic}`}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default InputField;
