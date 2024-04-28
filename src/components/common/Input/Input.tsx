import { HTMLAttributes, ChangeEvent, FocusEvent, RefObject, KeyboardEvent } from "react";

import styles from "./Input.module.css";
interface InputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  placeholder: string;
  isError?: boolean;
  isRequired?: boolean;
  maxLength?: number;
  type?: "text" | "password";
  inputRef?: RefObject<HTMLInputElement>;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
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
  type = "text",
  onChange,
  onBlur,
  onKeyDown,
  onFocus,
}: InputProps) {
  return (
    <input
      autoFocus={autoFocus}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      required={isRequired}
      ref={inputRef}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      className={`${styles.input} ${isError && styles.error}`}
    ></input>
  );
}
