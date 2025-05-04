import { forwardRef } from "react";
import styles from "./inputField.module.css";

type InputFieldProps = {
  id: number;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  isError?: boolean;
  placeholder: string;
  setRef: (
    index: number
  ) => (el: HTMLInputElement | HTMLSelectElement | null) => void;
};

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({
    id,
    type = "text",
    value,
    onChange,
    isError = false,
    placeholder,
    setRef,
  }) => (
    <input
      ref={setRef(id)}
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onBlur={(event) => onChange(event.target.value)}
      className={`${styles.input} ${isError ? styles.error : styles.basic}`}
      placeholder={placeholder}
    />
  )
);

export default InputField;
