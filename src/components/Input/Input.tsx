/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type InputProps = {
  placeholder: string;
  maxLength: number;
  value: string;
  error: boolean;
  setValue: (value: string) => void;
  allowOnly?: string;
};
const Input = ({ placeholder, maxLength, value, error, setValue, allowOnly }: InputProps) => {
  const handleChange = (inputValue: string) => {
    switch (allowOnly) {
      case "number":
        if (/^[0-9]*$/.test(inputValue)) {
          setValue(inputValue);
        }
        break;

      default:
        setValue(inputValue);
        break;
    }
  };

  return (
    <input
      css={inputStyle(error)}
      onChange={(e) => handleChange(e.target.value)}
      value={value}
      placeholder={placeholder}
      maxLength={maxLength}
    />
  );
};

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
    letter-spacing: 0%;
    vertical-align: middle;
    color: #acacac;
  }

  &:focus {
    outline-color: ${error ? "#FF3D3D" : "#000000"};
  }
`;

export default Input;
