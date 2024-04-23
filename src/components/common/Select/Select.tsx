import { ChangeEvent, RefObject } from "react";
import styles from "./Select.module.css";

interface SelectProps {
  options: string[];
  changeCardCompany: (event: ChangeEvent<HTMLSelectElement>) => void;
  selectRef: RefObject<HTMLSelectElement>;
  value?: string;
}

const Select = ({
  options,
  changeCardCompany,
  selectRef,
  value = "",
}: SelectProps) => {
  return (
    <select
      autoFocus
      name="cardCompany"
      id=""
      onChange={changeCardCompany}
      ref={selectRef}
      value={value}
      className={`${styles.select} ${value === "" ? styles.placeholder : ""}`}
    >
      <option value="" className={styles.placeholder} disabled hidden>
        카드사를 선택해주세요
      </option>
      {options.map((option) => (
        <option key={option} value={option} className={styles.inputText}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
