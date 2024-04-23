import { HTMLAttributes, ChangeEvent, FocusEvent } from "react";

import styles from "./Input.module.css";
interface InputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  isError: boolean;
  placeholder: string;
  isRequired?: boolean;
  maxLength?: number;
  isPassword?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

export default function Input({
  name,
  value,
  placeholder,
  isError,
  maxLength,
  autoFocus = false,
  isRequired = false,
  isPassword = false,
  onChange,
  onBlur,
}: InputProps) {
  return (
    <input
      autoFocus={autoFocus}
      type={isPassword ? "password" : "text"}
      name={name}
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      required={isRequired}
      onChange={onChange}
      onBlur={onBlur}
      className={`${styles.input} ${isError && styles.error}`}
    ></input>
  );
}
