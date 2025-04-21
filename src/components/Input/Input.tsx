import React from "react";
import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, className = "", ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={`${styles.input} ${error ? styles.errorInput : ""} ${className}`}
        {...rest}
      />
    );
  },
);

export default Input;
