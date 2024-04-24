import { HTMLAttributes, ChangeEvent, FocusEvent, RefObject, KeyboardEvent } from "react";

import styles from "./Input.module.css";
interface InputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  placeholder: string;
  isError?: boolean;
  isRequired?: boolean;
  maxLength?: number;
  isPassword?: boolean;
  inputRef?: RefObject<HTMLInputElement>;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export default function Input({
  name,
  value,
  placeholder,
  maxLength,
  inputRef,
  isError = false,
  autoFocus = false,
  isRequired = false,
  isPassword = false,
  onChange,
  onBlur,
  onKeyDown,
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
      ref={inputRef}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      className={`${styles.input} ${isError && styles.error}`}
    ></input>
  );
}
