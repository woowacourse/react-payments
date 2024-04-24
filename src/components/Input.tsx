import styled from "styled-components";
import { useState } from "react";

const SInput = styled.input<{
  isError: boolean;
}>`
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

interface InputProps {
  maxLength: number;
  value: string;
  type?: string;
  placeholder?: string;
  onChange: (inputValue: string) => boolean;
  onBlur?: (inputValue: string) => boolean;
  onFocus?: () => void;
}

export default function Input({
  maxLength,
  value,
  type,
  placeholder,
  onChange,
  onBlur,
  onFocus,
}: InputProps) {
  const [isError, setIsError] = useState(false);

  return (
    <SInput
      type={type ? type : "text"}
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={(e) => {
        if (!onChange) {
          return;
        }
        const isError = onChange(e.target.value);
        setIsError(isError);
      }}
      onBlur={(e) => {
        if (!onBlur) {
          return;
        }
        const isError = onBlur(e.target.value);
        setIsError(isError);
      }}
      onFocus={onFocus}
      value={value}
      isError={isError}
    ></SInput>
  );
}
