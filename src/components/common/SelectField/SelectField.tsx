import styles from "../InputField/inputField.module.css";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  isError?: boolean;
};

const SelectField = ({
  value,
  onChange,
  options,
  isError = false,
}: SelectProps) => {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={`${styles.input} ${isError ? styles.error : styles.basic}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectField;
