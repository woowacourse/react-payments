import { SelectHTMLAttributes } from 'react';
import styles from '../InputField/InputField.module.css';

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  isError?: boolean;
  placeholder?: string;
  options: { label: string; value: string }[];
};

const SelectField = ({
  name,
  onChange,
  onBlur,
  isError = false,
  placeholder,
  options,
  ...rest
}: SelectFieldProps) => {
  return (
    <select
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      className={`${styles.select} ${isError ? styles.error : styles.basic}`}
      {...rest}
    >
      {
        <option value="" disabled selected hidden>
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
