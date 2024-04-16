import React from 'react';

interface InputProps {
  name: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export default function Input({
  name,
  value,
  handleChange,
  placeholder,
}: InputProps) {
  return (
    <input
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    ></input>
  );
}
