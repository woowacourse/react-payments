import { InputHTMLAttributes } from "react";
import * as S from "./style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isError: boolean;
  ariaLabel?: string;
  onChangeInput?: (inputValue: string) => void;
  onBlurInput?: (inputValue: string) => void;
}

export default function Input({
  id,
  type,
  maxLength,
  placeholder,
  value,
  ariaLabel,
  isError,
  onChangeInput,
  onBlurInput,
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
      onChange={(e) => {
        if (onChangeInput) onChangeInput(e.target.value);
      }}
      onBlur={(e) => {
        if (onBlurInput) onBlurInput(e.target.value);
      }}
    ></S.Input>
  );
}
