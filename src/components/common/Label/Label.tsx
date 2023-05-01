import type { ComponentPropsWithoutRef } from "react";
import styles from "./style.module.css";

interface LabelProps extends ComponentPropsWithoutRef<"label"> {
  required?: boolean;
}

const Label = ({ children, required, ...attributes }: LabelProps) => {
  return (
    <label className={styles.label} {...attributes}>
      {children} {required && <span className={styles.required}>*</span>}
    </label>
  );
};

export default Label;
