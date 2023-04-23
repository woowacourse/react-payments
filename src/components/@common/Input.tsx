import React, { forwardRef } from "react";
import styled, { CSSProp } from "styled-components";

interface Props extends StyleInputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  maxLength?: number;
  placeholder?: string;
  type?: string;
  inputmode?: React.HTMLAttributes<HTMLLIElement>["inputMode"];
}

interface StyleInputProps {
  customInputStyle?: CSSProp;
}

const Input = forwardRef<HTMLInputElement, Props>(function (
  { value, placeholder, onChange, inputmode, ...props }: Props,
  ref,
) {
  return (
    <InputStyle
      value={value}
      onChange={onChange}
      inputMode={inputmode ?? "text"}
      placeholder={placeholder}
      ref={ref}
      {...props}
    />
  );
});

export default Input;

const InputStyle = styled.input<StyleInputProps>`
  width: ${(props) => props.width ?? "100%"};
  height: 45px;

  background-color: #ecebf1;
  border-radius: 7px;
  border: none;

  padding: 0 10px;

  &:focus {
    outline: none;
  }
  ${({ customInputStyle }) => customInputStyle && customInputStyle};
`;
