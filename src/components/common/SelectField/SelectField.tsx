import styles from "./SelectField.module.css";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
};

const SelectField = ({ value, onChange, options }: SelectProps) => {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={`${styles.input} 
        ${value ? styles.basic : styles.placeholder}`}
    >
      <option value="" disabled selected hidden>
        옵션을 선택하세요
      </option>

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectField;
