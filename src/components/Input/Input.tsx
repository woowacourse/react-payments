import { ComponentProps } from "react";
import styles from "./Input.module.css";

interface InputProps extends ComponentProps<"input"> {
  isError?: boolean;
}

function Input({ isError, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`${styles.input} ${isError ? styles.error : ""}`}
    />
  );
}

export default Input;
