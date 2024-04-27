import React, { forwardRef } from "react";

import styled from "styled-components";

interface Option {
  value: string;
  label: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string;
  options: ReadonlyArray<Option>;
  isError: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { placeholder, defaultValue = "", options, isError, onChange, onBlur },
    ref
  ) => {
    return (
      <StyledSelect
        ref={ref}
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
  }
);

export default Select;

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
