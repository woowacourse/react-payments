import type { ComponentProps, Ref } from "react";
import styles from "./Dropdown.module.css";

interface InputProps extends ComponentProps<"select"> {
  options: string[];
  placeholder?: string;
  ref?: Ref<HTMLSelectElement>;
}

function Dropdown({ options, placeholder, ref, ...props }: InputProps) {
  return (
    <select ref={ref} {...props} className={styles.dropdown}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
