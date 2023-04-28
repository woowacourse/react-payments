import React, { ChangeEvent, RefObject } from 'react';

import './InputCardData.css';

export type InputProps = {
  required: boolean;
  inputType: string;
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
  nextFocus: (e: ChangeEvent) => void;
  onFlip: () => void;
  handleInputData: (index: number, e: ChangeEvent<HTMLInputElement>) => void;
};

const InputCardData = ({
  required,
  inputType,
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
  nextFocus,
  onFlip,
  handleInputData,
}: InputProps) => {
  return inputType === 'password' ? (
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
        nextFocus(e);

        handleInputData(dataId, e);
      }}
      onFocus={onFlip}
      name={name}
      required={required}
    />
  ) : (
    <input
      className={`input-box ${className}`}
      value={value}
      type={inputType}
      maxLength={maxDataLength}
      minLength={minDataLength}
      data-id={dataId}
      ref={Ref}
      onChange={(e) => {
        onChange(e);
        handleError(e);
        nextFocus(e);
        handleInputData(dataId, e);
      }}
      onFocus={onFlip}
      name={name}
      required={required}
    />
  );
};

export default InputCardData;
