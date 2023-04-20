import { InputHTMLAttributes } from "react";

import styles from "./Input.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  // className?: string;
}

export default function Input(props: Props) {
  const {
    name,
    type,
    onChange,
    placeholder,
    inputMode,
    defaultValue,
    style,
    className,
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
      value={defaultValue}
    />
  );
}
