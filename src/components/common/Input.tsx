import styled from 'styled-components';

interface InputProps {
  [key: string]: any;
  isError?: boolean;
}

const Input = ({ isError = false, ...rest }: InputProps) => {
  return <StyledInput isError={isError} {...rest} />;
};

interface StyledInputProps {
  isError: boolean;
}

const StyledInput = styled.input<StyledInputProps>`
  width: ${props => props.width};
  padding: 12px 10px;

  border: 1.2px solid ${props => (props.isError ? '#ff3d3d' : '#acacac')};
  border-radius: 5px;
  font-size: 16px;

  &::placeholder {
    color: #acacac;
  }
  &:focus {
    outline: none;
  }
`;

export default Input;
