import { forwardRef, ComponentProps } from "react";
import styles from "./Input.module.css";

interface InputProps extends ComponentProps<"input"> {
  isError?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isError, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={`${styles.input} ${isError ? styles.error : ""}`}
      />
    );
  }
);

export default Input;
