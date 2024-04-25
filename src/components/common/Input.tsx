import { forwardRef } from 'react';
import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ isError = false, ...rest }: InputProps, ref) => {
  return <StyledInput $isError={isError} ref={ref} {...rest} />;
});

interface StyledInputProps {
  $isError: boolean;
}

const StyledInput = styled.input<StyledInputProps>`
  width: ${props => props.width};
  padding: 10px 7px;

  border: 1.2px solid ${props => (props.$isError ? '#ff3d3d' : '#acacac')};
  border-radius: 5px;
  font-size: 15px;

  &::placeholder {
    color: #acacac;
  }

  &:focus {
    outline: none;
  }
`;

export default Input;
