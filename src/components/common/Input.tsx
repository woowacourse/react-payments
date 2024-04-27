import { forwardRef } from "react";
import styled from "styled-components";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isError: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { type, maxLength, placeholder, value, isError, onChange, onBlur, onFocus },
    ref
  ) => {
    return (
      <SInput
        type={type ? type : "text"}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        isError={isError}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        ref={ref}
      ></SInput>
    );
  }
);

export default Input;

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
