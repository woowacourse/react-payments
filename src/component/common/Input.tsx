import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {
  type: string;
}

export default function Input(props: Props) {
  const { type, onChange, placeholder, inputMode, defaultValue, style } = props;
  return (
    <input
      style={style}
      type={type}
      inputMode={inputMode}
      onChange={onChange}
      placeholder={placeholder}
      value={defaultValue}
    />
  );
}
