/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const inputStyle = (error: boolean) => css`
  width: 100%;
  height: 32px;
  border: solid 1.01px ${error ? "#FF3D3D" : "#acacac"};
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

  &:focus {
    outline-color: ${error ? "#FF3D3D" : "#000000"};
  }
`;

type InputProps = {
  placeholder: string;
  maxLength: number;
  value: string;
  error: boolean;
  setValue: (value: string) => void;
  handleChangeError: (error: boolean) => void;
};

const Input = ({ placeholder, maxLength, value, error, setValue, handleChangeError }: InputProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    const isOnlyNumber = /^[0-9]*$/.test(input);

    if (isOnlyNumber) {
      handleChangeError(false);
    } else {
      handleChangeError(true);
    }
    setValue(input);
  };
  return (
    <input css={inputStyle(error)} onChange={onChange} value={value} placeholder={placeholder} maxLength={maxLength} />
  );
};

export default Input;
