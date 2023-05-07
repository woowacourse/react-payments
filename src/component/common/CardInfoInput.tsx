import { InputHTMLAttributes } from "react";

import "./cardInfoInput.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputPlace: "essential" | "optional";
}

export default function Input(props: InputProps) {
  const {
    inputPlace,
    name,
    type,
    onChange,
    placeholder,
    style,
    className,
    value,
  } = props;

  const required = inputPlace === "essential";
  const inputMode = inputPlace === "essential" ? "numeric" : "text";

  return (
    <input
      name={name}
      className={`input ${className}`}
      style={style}
      type={type}
      inputMode={inputMode}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      aria-required={required}
      value={value}
    />
  );
}
