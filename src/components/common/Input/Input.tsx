import { FocusEvent, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {
  const { onChange, autoFocus, ...rest } = props;

  return (
    <input
      className={`${styles.customInput} ${props.isError ? styles.isError : ""} `}
      {...rest}
      autoFocus={autoFocus}
      onBlur={(e) => {
        if (props.onBlur) {
          props.onBlur(e);
        }
      }}
      onChange={onChange}
    />
  );
}
