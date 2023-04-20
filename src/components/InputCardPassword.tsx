import React from 'react';
import './InputCardPassword.css';

export type InputCardPasswordProps = {
  value: string;
  onChange: (e: React.ChangeEvent) => void;
  maxDataLength: number;
  minDataLength: number;
  passwordType: string;
  name?: string;
};

const InputCardPassword = ({
  value,
  onChange,
  maxDataLength,
  minDataLength,
  passwordType,
  name,
}: InputCardPasswordProps) => {
  return (
    <input
      className={`input-password-container ${passwordType}`}
      type="password"
      maxLength={maxDataLength}
      minLength={minDataLength}
      value={value}
      onChange={onChange}
      name={name}
      required
    />
  );
};

export default InputCardPassword;
