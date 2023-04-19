import React from "react";
import styled, { CSSProp } from "styled-components";

interface Props extends StyleInputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  maxLength?: number;
  placeholder?: string;
  type?: string;
  inputmode?:
    | "text"
    | "search"
    | "none"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | undefined;
}

interface StyleInputProps {
  customInputStyle?: CSSProp;
}

function Input({ value, placeholder, onChange, inputmode, ...props }: Props) {
  return (
    <InputStyle
      value={value}
      onChange={onChange}
      inputMode={inputmode ?? "none"}
      placeholder={placeholder}
      {...props}
    />
  );
}

export default Input;

const InputStyle = styled.input<StyleInputProps>`
  /* width: ${(props) => props.width ?? "318px"}; */
  height: 45px;

  background-color: #ecebf1;
  border-radius: 7px;
  border: none;

  &:focus {
    outline: none;
  }
  ${({ customInputStyle }) => customInputStyle && customInputStyle};
`;
