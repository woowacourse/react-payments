import React, { ChangeEvent, RefObject } from 'react';
import './InputCardPassword.css';

export type InputCardPasswordProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxDataLength: number;
  minDataLength: number;
  passwordType: string;
  dataId: number;
  Ref: RefObject<HTMLInputElement>;
  name?: string;
  onFocus: (e: ChangeEvent) => void;
};

const InputCardPassword = ({
  value,
  onChange,
  maxDataLength,
  minDataLength,
  passwordType,
  name,
  Ref,
  dataId,
  onFocus,
}: InputCardPasswordProps) => {
  return (
    <input
      className={`input-password-container ${passwordType}`}
      type="password"
      maxLength={maxDataLength}
      minLength={minDataLength}
      value={value}
      data-id={dataId}
      ref={Ref}
      onChange={(e) => {
        onChange(e);
        onFocus(e);
      }}
      name={name}
      required
    />
  );
};

export default InputCardPassword;
