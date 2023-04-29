import { InputHTMLAttributes } from "react";

import "./input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
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
      className={`input ${className}`}
      style={style}
      type={type}
      inputMode={inputMode}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
}
