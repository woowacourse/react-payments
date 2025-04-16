/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const inputStyle = css`
  width: 100%;
  height: 32px;
  border: solid 1.01px #acacac;
  border-radius: 2px;
  padding: 8px;
  box-sizing: border-box;

  &::placeholder {
    font-family: Inter;
    font-weight: 400;
    font-size: 11px;
    line-height: 14.88px;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #acacac;
  }
`;

type InputProps = {
  placeholder: string;
  maxLength: number;
  value: string;
  setValue: (value: string) => void;
};

const Input = ({ placeholder, maxLength, value, setValue }: InputProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <input css={inputStyle} onChange={onChange} value={value} placeholder={placeholder} maxLength={maxLength} />;
};

export default Input;
