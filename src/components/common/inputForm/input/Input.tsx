import { ComponentProps } from "react";
import styles from "./Input.module.css";

export interface InputProps extends ComponentProps<"input"> {
  isValid?: boolean;
}

function Input({ isValid, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`${styles.input} ${isValid ? "" : styles.isNotValid} tx-md`}
    />
  );
}

export default Input;
