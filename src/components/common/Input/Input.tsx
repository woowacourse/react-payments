import { css } from "@emotion/react";
import { forwardRef } from "react";

type InputProps = {
  placeholder: string;
  maxLength: number;
  value: string;
  error: boolean;
  onChange: (value: string) => void;
  type?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, maxLength, value, error, onChange, type = "text" }, ref) => {
    return (
      <input
        ref={ref}
        css={inputStyle(error)}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        type={type}
      />
    );
  },
);

Input.displayName = "Input";

const inputStyle = (error: boolean) => css`
  width: 100%;
  height: 32px;
  border: solid 1.01px ${error ? "#FF3D3D" : "#acacac"};
  border-radius: 2px;
  padding: 8px;
  box-sizing: border-box;

  &::placeholder {
    font-weight: 400;
    font-size: 11px;
    line-height: 14.88px;
    color: #acacac;
  }

  &:focus {
    outline-color: ${error ? "#FF3D3D" : "#000000"};
  }
`;

export default Input;
