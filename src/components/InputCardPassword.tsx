import React from 'react';
import './InputCardPassword.css';

export type InputCardPasswordProps = {
  value: string;
  onChange: (e: React.ChangeEvent) => void;
  maxDataLength: number;
  minDataLength: number;
  width: string;
  name?: string;
};

const InputCardPassword = ({
  value,
  onChange,
  maxDataLength,
  minDataLength,
  width,
  name,
}: InputCardPasswordProps) => {
  return (
    <div className="input-password-container">
      <input
        className="input-password"
        type="password"
        maxLength={maxDataLength}
        minLength={minDataLength}
        value={value}
        onChange={onChange}
        style={{ width }}
        name={name}
        required
      />
    </div>
  );
};

export default InputCardPassword;
