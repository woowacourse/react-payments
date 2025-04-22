import type { ComponentProps } from "react";
import styles from "./Dropdown.module.css";

interface InputProps extends ComponentProps<"select"> {
  itemList: string[];
}

function Dropdown({ itemList, ...props }: InputProps) {
  return (
    <select {...props} className={styles.dropdown}>
      {itemList.map((item) => (
        <option value={item}>{item}</option>
      ))}
    </select>
  );
}

export default Dropdown;
