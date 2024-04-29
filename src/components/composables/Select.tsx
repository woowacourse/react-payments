import { forwardRef } from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select<{ $isError: boolean }>`
  flex: 1;

  min-width: 71.25px;
  height: 32px;
  padding: 8px;

  border: 1px solid ${(props) => (props.$isError ? '#ff3d3d' : '#acacac')};
  border-radius: 2px;

  font-size: 0.6875rem;

  &:focus {
    border: 1px solid ${(props) => (props.$isError ? '#ff3d3d' : '#000')};
  }

  &:required:invalid {
    color: ${(props) => (props.$isError ? '#ff3d3d' : '#acacac')};
  }
`;

const Placeholder = styled.option`
  display: none;
`;

type SelectType = {
  value: string;
  options: string[];
  placeholder: string;
  isError: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
};

const Select = forwardRef<HTMLSelectElement, SelectType>((props, ref) => {
  const { value, placeholder = '', isError, options, onChange, onBlur } = props;
  return (
    <StyledSelect
      autoFocus
      ref={ref}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
      $isError={isError}
      required
    >
      <Placeholder value="">{placeholder}</Placeholder>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
});
export default Select;
