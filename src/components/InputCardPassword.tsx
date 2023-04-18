import React from 'react';
export type InputCardPasswordProps = {
  value: string;
  onChange: (e: React.ChangeEvent) => void;
  status: boolean;
  errorMessage: string;
  className: string;
  maxDataLength: number;
};

const InputCardPassword = ({
  value,
  onChange,
  status,
  errorMessage,
  maxDataLength,
}: InputCardPasswordProps) => {
  return (
    <div>
      <input type="password" maxLength={maxDataLength} value={value} onChange={onChange} />
      {status ? '' : <span>{errorMessage}</span>}
    </div>
  );
};

export default InputCardPassword;
