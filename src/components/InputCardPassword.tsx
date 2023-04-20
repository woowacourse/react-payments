import React from 'react';
import './InputCardPassword.css';

export type InputCardPasswordProps = {
  value: string;
  onChange: (e: React.ChangeEvent) => void;
  status: boolean;
  errorMessage: string;
  maxDataLength: number;
  width: string;
  name?: string;
};

const InputCardPassword = ({
  value,
  onChange,
  status,
  errorMessage,
  maxDataLength,
  width,
  name,
}: InputCardPasswordProps) => {
  return (
    <div className="input-password-container">
      <input
        className="input-password"
        type="password"
        maxLength={maxDataLength}
        value={value}
        onChange={onChange}
        style={{ width }}
        name={name}
      />
      {status ? '' : <span>{errorMessage}</span>}
    </div>
  );
};

export default InputCardPassword;
