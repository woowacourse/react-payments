import { forwardRef } from "react";
import type { ComponentProps } from "react";
import styles from "./Dropdown.module.css";

interface InputProps extends ComponentProps<"select"> {
  options: string[];
  placeholder?: string;
}

const Dropdown = forwardRef<HTMLSelectElement, InputProps>(
  ({ options, placeholder, ...props }, ref) => {
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
);

export default Dropdown;
