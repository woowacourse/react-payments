import React, { ChangeEvent, RefObject } from 'react';
import './InputCardData.css';

export type InputProps = {
  value: string;
  isPasswordType?: boolean;
  passwordType?: string;
  className?: string;
  name: string;
  maxDataLength: number;
  minDataLength: number;
  dataId: number;
  Ref: RefObject<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: (e: ChangeEvent) => void;
};

const InputCardData = ({
  value,
  isPasswordType,
  passwordType,
  maxDataLength,
  minDataLength,
  name,
  className,
  Ref,
  dataId,
  onChange,
  onFocus,
}: InputProps) => {
  return isPasswordType ? (
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
  ) : (
    <input
      className={`input-box ${className}`}
      value={value}
      maxLength={maxDataLength}
      minLength={minDataLength}
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

export default InputCardData;
