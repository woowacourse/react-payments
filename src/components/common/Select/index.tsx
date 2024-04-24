import React from 'react';

interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  options: string[];
  placeholder?: string;
  isError?: boolean;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

function Select({
  options,
  placeholder,
  isError = false,
  onChange,
  ...rest
}: SelectProps) {
  const className = `input ${isError ? 'error' : ''}`;

  return (
    <select onChange={onChange} className={className} {...rest}>
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
