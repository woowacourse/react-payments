import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const SInput = styled.input<{ isError: boolean }>`
  width: 100%;
  height: 15px;
  padding: 8px 15px 8px 8px;
  gap: 8px;
  border: 1px solid
    ${(props) => (props.isError ? "red" : "rgba(172, 172, 172, 1)")};
  border-radius: 2px;
  font-family: Inter;
  font-size: 11px;
  font-weight: 400;
  line-height: 14.88px;
  text-align: left;

  &::placeholder {
    color: rgba(172, 172, 172, 1);
  }
`;

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
    <SInput
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
    ></SInput>
  );
}
