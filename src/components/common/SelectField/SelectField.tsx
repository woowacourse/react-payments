import { forwardRef } from "react";
import styles from "./SelectField.module.css";

type Option = { label: string; value: string };
type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
};

const SelectField = forwardRef<HTMLSelectElement, SelectProps>(
  ({ value, onChange, options }, ref) => (
    <select
      ref={ref}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={`${styles.input} ${value ? styles.basic : styles.placeholder}`}
    >
      <option value="" disabled hidden>
        옵션을 선택하세요
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
);

export default SelectField;
