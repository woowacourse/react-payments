import { useState } from "react";
import styled from "styled-components";

const SInput = styled.input<{
  isErrorOnChange: boolean;
  isErrorOnBlur: boolean;
}>`
  width: 100%;
  height: 15px;
  padding: 8px 15px 8px 8px;
  gap: 8px;
  border: 1px solid
    ${(props) =>
      props.isErrorOnChange || props.isErrorOnBlur
        ? "red"
        : "rgba(172, 172, 172, 1)"};
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

interface Props {
  type?: string;
  maxLength: number;
  placeholder: string;
  onChange: (inputValue: string) => boolean;
  onBlur?: (inputValue: string) => boolean;
  value: string;
}

export default function Input({
  type,
  maxLength,
  placeholder,
  onChange,
  onBlur,
  value,
}: Props) {
  const [isErrorOnChange, setIsErrorOnChange] = useState(false);
  const [isErrorOnBlur, setIsErrorOnBlur] = useState(false);

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
        setIsErrorOnChange(isError);
      }}
      onBlur={(e) => {
        if (!onBlur) {
          return;
        }
        const isError = onBlur(e.target.value);
        setIsErrorOnBlur(isError);
      }}
      value={value}
      isErrorOnChange={isErrorOnChange}
      isErrorOnBlur={isErrorOnBlur}
    ></SInput>
  );
}
