import styled from '@emotion/styled';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError: boolean;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input(props: InputProps) {
  return <InputWrapper {...props} />;
}

export default Input;

const InputWrapper = styled.input<InputProps>`
  width: 100%;
  border: 1px solid ${(props) => (props.isError ? 'red' : 'gray')};
  border-radius: 2px;
  padding: 8px;
  font-size: 11px;
`;
