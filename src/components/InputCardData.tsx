import React from 'react';
import './InputCardData.css';

export type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent) => void;
  className: string;
  name: string;
};

const InputCardData = ({ value, onChange, name }: InputProps) => {
  return (
    <div>
      <input className="input-box" value={value} onChange={onChange} name={name} required />
    </div>
  );
};

export default InputCardData;
