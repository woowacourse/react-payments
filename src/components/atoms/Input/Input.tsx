import { InputHTMLAttributes } from "react";
import * as S from "./style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isError: boolean;
  onChangeInput?: (inputValue: string) => void;
  onBlurInput?: (inputValue: string) => void;
}

export default function Input({
  type,
  maxLength,
  placeholder,
  value,
  isError,
  onChangeInput,
  onBlurInput,
}: Props) {
  return (
    <S.Input
      type={type ? type : "text"}
      maxLength={maxLength}
      placeholder={placeholder}
      value={value}
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
