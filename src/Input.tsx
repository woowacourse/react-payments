import { ChangeEvent } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 2px;
  padding: 8px;
`;

function Input({
  placeholder,
  isError,
  value,
  onChange,
}: {
  placeholder: string;
  isError: boolean;
  value: string;
  onChange: (e: ChangeEvent) => void;
}) {
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></StyledInput>
  );
}

export default Input;
