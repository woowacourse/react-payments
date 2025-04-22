import type { ComponentProps } from "react";
import styles from "./Dropdown.module.css";

interface InputProps extends ComponentProps<"select"> {
  itemList: string[];
  placeholder: string;
}

function Dropdown({ itemList, placeholder, ...props }: InputProps) {
  return (
    <select {...props} className={styles.dropdown}>
      <option value="" disabled>
        {placeholder}
      </option>
      {itemList.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
