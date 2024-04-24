import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  padding: 8px;
  background: white;
  color: black;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  options: ReadonlyArray<Option>;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  defaultValue?: string;
}

const Select = ({
  options,
  onChange,
  placeholder,
  defaultValue = "",
}: SelectProps) => {
  return (
    <StyledSelect onChange={onChange} defaultValue={defaultValue}>
      {placeholder && (
        <option value={defaultValue} disabled hidden>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
