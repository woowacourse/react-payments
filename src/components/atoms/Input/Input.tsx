import { InputHTMLAttributes } from "react";
import * as S from "./style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isError: boolean;
  ariaLabel?: string;
}

export default function Input({
  id,
  type,
  maxLength,
  placeholder,
  value,
  ariaLabel,
  isError,
  onChange,
  onBlur,
}: Props) {
  return (
    <S.Input
      id={id}
      type={type ? type : "text"}
      maxLength={maxLength}
      placeholder={placeholder}
      value={value}
      aria-label={ariaLabel}
      isError={isError}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}
