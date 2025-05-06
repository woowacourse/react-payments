import styled from '@emotion/styled';

interface InputProps extends React.ComponentProps<'input'> {
  hasError: boolean;
}

function Input(props: InputProps) {
  return <InputWrapper {...props} />;
}

export default Input;

const InputWrapper = styled.input<InputProps>`
  width: 100%;
  border: 1px solid ${(props) => (props.hasError ? 'red' : 'gray')};
  border-radius: 2px;
  padding: 8px;
  font-size: 11px;
  outline: none;

  &:focus {
    border-color: ${(props) => !props.hasError && 'black'};
  }
`;
