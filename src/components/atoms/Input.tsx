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

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  handleChange: (inputValue: string) => boolean;
  handleBlur?: (inputValue: string) => boolean;
}

export default function Input({
  type,
  maxLength,
  placeholder,
  handleChange,
  handleBlur,
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
        if (!handleChange) {
          return;
        }
        const isError = handleChange(e.target.value);
        setIsErrorOnChange(isError);
      }}
      onBlur={(e) => {
        if (!handleBlur) {
          return;
        }
        const isError = handleBlur(e.target.value);
        setIsErrorOnBlur(isError);
      }}
      value={value}
      isErrorOnChange={isErrorOnChange}
      isErrorOnBlur={isErrorOnBlur}
    ></SInput>
  );
}
