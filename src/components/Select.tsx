import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select<{
  isError: boolean;
}>`
  padding: 8px;
  background: white;
  color: black;
  border: 1px solid
    ${(props) => (props.isError ? "red" : "rgba(172, 172, 172, 1)")};
  border-radius: 4px;
  width: 100%;
`;

interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  placeholder?: string;
  defaultValue?: string;
  options: ReadonlyArray<Option>;
  isError: boolean;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLSelectElement>) => void;
}

const Select = ({
  placeholder,
  defaultValue = "",
  options,
  isError,
  onChange,
  onBlur,
}: SelectProps) => {
  return (
    <StyledSelect
      defaultValue={defaultValue}
      isError={isError}
      onChange={onChange}
      onBlur={onBlur}
    >
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
