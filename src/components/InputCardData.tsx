import React from 'react';
import './InputCardData.css';

export type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent) => void;
  status: boolean;
  errorMessage: string;
  className: string;
};

const InputCardData = ({ value, onChange, status, errorMessage }: InputProps) => {
  // TODO : status
  return (
    <div>
      <input className="input-box" value={value} onChange={onChange} />
      {status ? '' : <span>{errorMessage}</span>}
    </div>
  );
};

export default InputCardData;
