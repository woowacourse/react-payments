import { SelectHTMLAttributes } from 'react';
import styles from '../InputField/InputField.module.css';

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  isError?: boolean;
  placeholder?: string;
  options: { label: string; value: string }[];
};

const SelectField = ({
  name,
  value = '',
  onChange,
  onBlur,
  isError = false,
  onMouseDown,
  placeholder,
  options,
  ...rest
}: SelectFieldProps) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onMouseDown={onMouseDown}
      className={`${styles.select} ${isError ? styles.error : styles.basic}`}
      {...rest}
    >
      {
        <option value="" disabled hidden>
          {placeholder}
        </option>
      }
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default SelectField;
