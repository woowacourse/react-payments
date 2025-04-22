import { SelectHTMLAttributes } from 'react';
import styles from '../InputField/InputField.module.css';

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  isError?: boolean;
  options: { label: string; value: string }[];
};

const SelectField = ({
  name,
  onChange,
  onBlur,
  value,
  isError = false,
  options,
  ...rest
}: SelectFieldProps) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`${styles.field} ${isError ? styles.error : styles.basic}`}
      {...rest}
    >
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default SelectField;
