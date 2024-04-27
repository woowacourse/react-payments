import styles from './style.module.css';

interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  options: string[];
  placeholder?: string;
  isError?: boolean;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  onBlur: React.FocusEventHandler<HTMLSelectElement>;
}

function Select({
  options,
  placeholder,
  isError = false,
  onChange,
  onBlur,
  ...rest
}: SelectProps) {
  const className = `${styles.select} ${isError ? styles.error : ''}`;

  return (
    <select
      className={className}
      defaultValue=""
      onChange={onChange}
      onBlur={onBlur}
      {...rest}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
