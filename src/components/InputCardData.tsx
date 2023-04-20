import React from 'react';
import './InputCardData.css';

export type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  name: string;
};

const InputCardData = ({ value, onChange, name, className }: InputProps) => {
  return (
    <input
      className={`input-box ${className}`}
      value={value}
      onChange={onChange}
      name={name}
      required
    />
  );
};

export default InputCardData;
