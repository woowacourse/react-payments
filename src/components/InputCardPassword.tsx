import React from 'react';
import './InputCardPassword.css';

export type InputCardPasswordProps = {
  value: string;
  onChange: (e: React.ChangeEvent) => void;
  status: boolean;
  errorMessage: string;
  className: string;
  maxDataLength: number;
  width: string;
};

const InputCardPassword = ({
  value,
  onChange,
  status,
  errorMessage,
  maxDataLength,
  width,
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
      />
      {status ? '' : <span>{errorMessage}</span>}
    </div>
  );
};

export default InputCardPassword;
