import { ChangeEvent } from "react";

interface Props {
  type: string;
  placeholder: string;
  inputMode?:
    | "search"
    | "text"
    | "email"
    | "tel"
    | "url"
    | "none"
    | "numeric"
    | "decimal"
    | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: Props) {
  const { type, onChange, placeholder, inputMode } = props;
  return (
    <input
      type={type}
      inputMode={inputMode}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
