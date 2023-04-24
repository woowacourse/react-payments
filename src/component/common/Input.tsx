import { InputHTMLAttributes } from "react";

import styles from "./Input.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: Props) {
  const {
    name,
    type,
    onChange,
    placeholder,
    inputMode,
    style,
    className,
    value,
  } = props;
  return (
    <input
      name={name}
      className={`${styles.input} ${className}`}
      style={style}
      type={type}
      inputMode={inputMode}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
}
