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
  handleError: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: (e: ChangeEvent) => void;
  handleInputData: (index: number, e: ChangeEvent<HTMLInputElement>) => void;
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
  handleError,
  onChange,
  onFocus,
  handleInputData,
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
        handleInputData(dataId, e);
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
        handleError(e);
        onFocus(e);
        handleInputData(dataId, e);
      }}
      name={name}
      required
    />
  );
};

export default InputCardData;
