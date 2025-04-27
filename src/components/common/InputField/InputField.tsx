import { forwardRef, InputHTMLAttributes } from 'react';
import styles from './inputField.module.css';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  isError?: boolean;
};

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    const {
      value,
      name,
      onChange,
      onBlur,
      onMouseDown,
      isError,
      placeholder,
      ...rest
    } = props;
    return (
      <input
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        onMouseDown={onMouseDown}
        className={`${styles.input} ${isError ? styles.error : styles.basic}`}
        placeholder={placeholder}
        {...rest}
        ref={ref}
      />
    );
  }
);
export default InputField;
