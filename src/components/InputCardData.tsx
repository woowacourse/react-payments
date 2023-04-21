import React, { ChangeEvent, RefObject } from 'react';

export type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  name: string;
  maxDataLength: number;
  minDataLength: number;
  dataId: number;
  Ref: RefObject<HTMLInputElement>;
  onFocus: (e: ChangeEvent) => void;
};

const InputCardData = ({
  value,
  onChange,
  maxDataLength,
  minDataLength,
  name,
  className,
  Ref,
  dataId,
  onFocus,
}: InputProps) => {
  return (
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
