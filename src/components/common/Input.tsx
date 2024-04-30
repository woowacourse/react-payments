import { css } from '@emotion/react';
import React from 'react';

interface InputType {
  setBlur?: () => void;
  setFocus?: () => void;
  type?: string;
  name: string;
  placeholder?: string;
  maxLength?: number;
  error?: string;
  autoFocus?: boolean;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ autoFocus, setFocus, setBlur, name, maxLength, error, handleOnChange, ...props }: InputType) {
  return (
    <input
      autoFocus={autoFocus}
      onBlur={() => {
        setBlur && setBlur();
      }}
      onFocus={() => setFocus && setFocus()}
      name={name}
      maxLength={maxLength}
      css={inputStyle({ border: error ? '#FF3D3D' : '#acacac', focusColor: error ? '#FF3D3D' : '#000' })}
      onChange={(event) => {
        handleOnChange(event);
      }}
      {...props}
    ></input>
  );
}

const inputStyle = ({ border, focusColor }: { border: string; focusColor: string }) => css`
  border: 1px solid;
  border-color: ${border};
  border-radius: 4px;
  padding: 8px;
  font-size: 11px;
  outline: none;
  width: 100%;

  &:active,
  &:focus {
    border-color: ${focusColor};
  }
`;

export default Input;
