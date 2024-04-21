import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

const Input = ({ isError = false, ...rest }: InputProps) => {
  return <StyledInput $isError={isError} {...rest} />;
};

interface StyledInputProps {
  $isError: boolean;
}

const LIGHT_GREY = '#acacac';
const StyledInput = styled.input<StyledInputProps>`
  width: ${props => props.width};
  padding: 10px 7px;

  border: 1.2px solid ${props => (props.$isError ? '#ff3d3d' : LIGHT_GREY)};
  border-radius: 5px;
  font-size: 15px;

  &::placeholder {
    color: ${LIGHT_GREY};
  }

  &:focus {
    outline: none;
  }
`;

export default Input;
