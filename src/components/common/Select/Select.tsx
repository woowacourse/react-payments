import React from "react";
import styles from "./Select.module.css";

interface SelectProps {
  options: string[];
}

const Select = ({ options }: SelectProps) => {
  return (
    <select name="" id="" className={styles.select}>
      {options.map((option) => (
        <option value={option}></option>
      ))}
    </select>
  );
};

export default Select;
