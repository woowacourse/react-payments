import React, { ChangeEvent, RefObject } from 'react';

import './InputCardData.css';

export type InputProps = {
  isPasswordType?: boolean;
  passwordType?: string;
  className?: string;
  value: string;
  minDataLength: number;
  maxDataLength: number;
  name: string;
  dataId: number;
  refObject: RefObject<HTMLInputElement>;
  handleError: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: (e: ChangeEvent) => void;
  handleInputData: (index: number, e: ChangeEvent<HTMLInputElement>) => void;
};

const InputCardData = ({
  isPasswordType,
  passwordType,
  className,
  value,
  minDataLength,
  maxDataLength,
  name,
  dataId,
  refObject: Ref,
  handleError,
  onChange,
  onFocus,
  handleInputData,
}: InputProps) => {
  return isPasswordType ? (
    <input
      className={`input-password-container ${passwordType}`}
      type="password"
      value={value}
      maxLength={maxDataLength}
      minLength={minDataLength}
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
