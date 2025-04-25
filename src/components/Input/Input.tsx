import { ComponentProps, Ref } from "react";
import styles from "./Input.module.css";

interface InputProps extends ComponentProps<"input"> {
  isError?: boolean;
  ref?: Ref<HTMLInputElement>;
}

function Input({ isError, ref, ...props }: InputProps) {
  return (
    <input
      ref={ref}
      {...props}
      className={`${styles.input} ${isError ? styles.error : ""}`}
    />
  );
}

export default Input;
